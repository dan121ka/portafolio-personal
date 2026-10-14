import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface ProjectItem {
  id: number;
  title: string;
  category: 'web' | 'mobile-iot' | 'redes';
  categoryLabel: string;
  tech: string;
  image: string;
  description: string;
  features: string[];
}

export interface SkillItem {
  name: string;
  percentage: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {
  // Datos personales del estudiante
  readonly authorName = 'Alan Daniel Canaviri Conde';
  readonly university = 'UNIFRANZ (Universidad Privada Franz Tamayo)';
  readonly location = 'Cochabamba, Bolivia';
  readonly degree = 'Ingeniería de Sistemas';
  readonly phone = '+591 69433231';
  readonly email = 'somoseldia27@gmail.com';

  // Máquina de escribir (Typed)
  readonly roles: string[] = [
    'Futuro Ingeniero de Sistemas',
    'Desarrollador Full Stack & Móvil',
    'Especialista en Redes Cisco & IoT',
    'Creador de Soluciones Tecnológicas'
  ];
  currentRole = 'Futuro Ingeniero de Sistemas';
  private roleIndex = 0;
  private charIndex = 28;
  private isDeleting = true;
  private typingTimeoutId: any = null;

  // Navegación y UI
  isHeaderOpen = false;
  isScrollTopVisible = false;
  activeSection = 'hero';

  // Habilidades con porcentajes visibles requeridos
  readonly skillsColumn1: SkillItem[] = [
    { name: 'Angular / HTML / CSS', percentage: 95 },
    { name: 'Flutter / Dart / BLE', percentage: 90 },
    { name: 'Python / Flask / ML', percentage: 85 }
  ];

  readonly skillsColumn2: SkillItem[] = [
    { name: 'IoT ESP32 / R307S / MPU6050', percentage: 90 },
    { name: 'SQLite / Firebase', percentage: 90 },
    { name: 'Redes Cisco', percentage: 85 }
  ];

  // Filtros de Portafolio
  readonly categories = [
    { key: 'all', label: 'Todos' },
    { key: 'web', label: 'Web' },
    { key: 'mobile-iot', label: 'Mobile/IoT' },
    { key: 'redes', label: 'Redes' }
  ];
  activeFilter = 'all';

  // Proyectos reales del portafolio
  readonly projects: ProjectItem[] = [
    {
      id: 1,
      title: 'Hip-Twin: Simulación Biomecánica 3D (Flask/SQLite)',
      category: 'web',
      categoryLabel: 'Web',
      tech: 'Python / Flask / SQLite / Three.js',
      image: 'assets/img/portfolio/app-1.jpg',
      description: 'Modelado y simulación biomecánica 3D de articulación coxofemoral para análisis cinemático y ortopédico, con visualización interactiva y persistencia de métricas en base de datos SQLite.',
      features: [
        'Simulación tridimensional interactiva con renderizado web en tiempo real',
        'Arquitectura modular backend implementada con Python y Flask',
        'Registro y persistencia de rangos articulares y evaluaciones clínicas'
      ]
    },
    {
      id: 2,
      title: 'Controlador Biométrico de Riego por Turnos (Flutter/BLE/ESP32/R307S)',
      category: 'mobile-iot',
      categoryLabel: 'Mobile/IoT',
      tech: 'Flutter / Dart / BLE / ESP32 / R307S',
      image: 'assets/img/portfolio/product-1.jpg',
      description: 'Sistema integral de control y asignación automatizada de turnos de riego agrícola basado en autenticación biométrica dactilar y sincronización inalámbrica mediante app móvil.',
      features: [
        'Autenticación biométrica de agricultores mediante módulo dactilar R307S',
        'Comunicación inalámbrica de ultra bajo consumo con Bluetooth Low Energy (BLE)',
        'App móvil en Flutter con calendarización dinámica y control de electroválvulas'
      ]
    },
    {
      id: 3,
      title: 'Prototipo IoT con MPU6050 y Firebase',
      category: 'mobile-iot',
      categoryLabel: 'Mobile/IoT',
      tech: 'ESP32 / MPU6050 / Firebase Realtime DB',
      image: 'assets/img/portfolio/branding-1.jpg',
      description: 'Dispositivo IoT de telemetría de movimiento y aceleración con sensor giroscópico MPU6050 sincronizado en tiempo real con Firebase Realtime Database para análisis postural.',
      features: [
        'Cálculo preciso de aceleración triaxial e inclinación angular en tiempo real',
        'Sincronización continua de datos hacia la nube con Firebase',
        'Monitoreo remoto y generación de alertas instantáneas ante desvíos críticos'
      ]
    },
    {
      id: 4,
      title: 'Sistema Distribuido de Venta de Entradas (Node.js/SQLite)',
      category: 'web',
      categoryLabel: 'Web',
      tech: 'Node.js / Express / SQLite / WebSockets',
      image: 'assets/img/portfolio/books-1.jpg',
      description: 'Plataforma web distribuida para reserva y compra concurrente de boletos en tiempo real con bloqueo atómico de butacas y sincronización entre múltiples clientes.',
      features: [
        'Manejo robusto de alta concurrencia con aislamiento transaccional',
        'Actualización inmediata del mapa interactivo de asientos con WebSockets',
        'Generación de comprobantes digitales con códigos QR únicos'
      ]
    },
    {
      id: 5,
      title: 'Cerradura Electrónica Biométrica con ESP32',
      category: 'mobile-iot',
      categoryLabel: 'Mobile/IoT',
      tech: 'ESP32 / Sensor R307S / Servomotores / C++',
      image: 'assets/img/portfolio/app-2.jpg',
      description: 'Control de acceso inteligente para recintos y laboratorios universitarios con verificación biométrica huella dactilar, servo actuadores y panel de monitoreo IoT.',
      features: [
        'Tasa de reconocimiento biométrico ultrarrápida (menos de 0.8 segundos)',
        'Accionamiento mecánico motorizado con servomotores de alto torque',
        'Bitácora local de registros con almacenamiento de marcas de tiempo'
      ]
    },
    {
      id: 6,
      title: 'Topologías de Red VLSM en Cisco Packet Tracer',
      category: 'redes',
      categoryLabel: 'Redes',
      tech: 'Cisco IOS / VLSM / OSPF / VLANs / NAT',
      image: 'assets/img/portfolio/branding-2.jpg',
      description: 'Diseño arquitectónico, subnetting VLSM, enrutamiento dinámico OSPF y segmentación por VLANs en redes empresariales simuladas para alta disponibilidad.',
      features: [
        'Subnetting eficiente con Variable Length Subnet Mask (VLSM)',
        'Configuración de routers y switches Cisco con enlaces troncales 802.1Q',
        'Implementación de listas de control de acceso (ACLs) y traducción NAT'
      ]
    }
  ];

  // Modal interactivo para detalles de proyectos
  selectedProject: ProjectItem | null = null;

  // Formulario de contacto interactivo
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  formStatus: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  ngOnInit(): void {
    this.currentRole = this.roles[0];
    this.charIndex = this.roles[0].length;
    this.isDeleting = true;
    this.typingTimeoutId = setTimeout(() => this.startTypewriter(), 2500);
  }

  ngOnDestroy(): void {
    if (this.typingTimeoutId) {
      clearTimeout(this.typingTimeoutId);
    }
  }

  private startTypewriter(): void {
    const fullText = this.roles[this.roleIndex];

    if (this.isDeleting) {
      this.currentRole = fullText.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.currentRole = fullText.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    let delay = this.isDeleting ? 30 : 65;

    if (!this.isDeleting && this.charIndex === fullText.length) {
      delay = 2500;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      delay = 450;
    }

    this.typingTimeoutId = setTimeout(() => this.startTypewriter(), delay);
  }

  get filteredProjects(): ProjectItem[] {
    if (this.activeFilter === 'all') {
      return this.projects;
    }
    return this.projects.filter(item => item.category === this.activeFilter);
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
  }

  toggleHeader(): void {
    this.isHeaderOpen = !this.isHeaderOpen;
  }

  closeHeader(): void {
    this.isHeaderOpen = false;
  }

  scrollToSection(sectionId: string, event: Event): void {
    event.preventDefault();
    this.activeSection = sectionId;
    this.closeHeader();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToTop(event: Event): void {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPos = window.scrollY || document.documentElement.scrollTop;
    this.isScrollTopVisible = scrollPos > 100;

    const sections = ['hero', 'about', 'skills', 'resume', 'portfolio', 'services', 'contact'];
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 250 && rect.bottom >= 120) {
          this.activeSection = id;
          break;
        }
      }
    }
  }

  openProjectModal(project: ProjectItem, event: Event): void {
    event.preventDefault();
    this.selectedProject = project;
  }

  closeProjectModal(): void {
    this.selectedProject = null;
  }

  submitContactForm(): void {
    if (!this.contactForm.name || !this.contactForm.email || !this.contactForm.message) {
      return;
    }

    this.formStatus = 'loading';
    setTimeout(() => {
      this.formStatus = 'success';
      this.contactForm = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      setTimeout(() => {
        this.formStatus = 'idle';
      }, 5000);
    }, 1200);
  }
}
