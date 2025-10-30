import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'portfolio', 'competencies', 'certificates', 'contacts'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    { icon: 'Video', title: 'СОТ, СВН, ВН', desc: 'Система охранного теленаблюдения и видеонаблюдения' },
    { icon: 'Camera', title: 'ПСОТ', desc: 'Система периметрального видеонаблюдения' },
    { icon: 'Shield', title: 'ОС, ОТС, СОТС', desc: 'Система охранной и охранно-тревожной сигнализации' },
    { icon: 'AlertTriangle', title: 'ОП', desc: 'Система охраны периметра' },
    { icon: 'Lock', title: 'СКУД', desc: 'Система контроля и управления доступом' },
    { icon: 'Flame', title: 'АПС, ПС, АУПС, СПС', desc: 'Система пожарной сигнализации' },
    { icon: 'Droplets', title: 'АППЗ, АДЗ, СППЗ', desc: 'Автоматическая противопожарная защита' },
    { icon: 'Bell', title: 'СОУЭ', desc: 'Система оповещения и управления эвакуацией' },
    { icon: 'Network', title: 'СКС', desc: 'Структурированная кабельная система' },
    { icon: 'Server', title: 'ЛВС', desc: 'Локальная вычислительная сеть' },
  ];

  const competencies = [
    'Проектирование систем безопасности',
    'Разработка проектной документации',
    'Техническое консультирование',
    'Комплексные инженерные решения',
    'Сопровождение проектов',
    'Экспертиза и аудит систем',
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Cpu" className="text-primary" size={28} />
              <span className="font-bold text-xl">К.С. Морин</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              {['О себе', 'Услуги', 'Портфолио', 'Компетенции', 'Сертификаты', 'Контакты'].map((item, idx) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(['about', 'services', 'portfolio', 'competencies', 'certificates', 'contacts'][idx])}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === ['about', 'services', 'portfolio', 'competencies', 'certificates', 'contacts'][idx]
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-primary/10 text-primary border-primary/20">Инженер-проектировщик</Badge>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="gradient-text">Морин</span> Константин Сергеевич
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Профессиональное проектирование слаботочных систем с фокусом на инновационные технологии и комплексные решения для объектов любой сложности
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <Button size="lg" onClick={() => scrollToSection('contacts')} className="group">
                  Связаться со мной
                  <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('services')}>
                  Мои услуги
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
              <div className="relative">
                <img
                  src="https://cdn.poehali.dev/files/4ea1aa8b-3e8d-498a-8651-9df6b14defad.png"
                  alt="Константин Морин"
                  className="w-full object-cover aspect-square rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold">О себе</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Специализируюсь на разработке проектной документации для слаботочных систем различного назначения. 
              Мой опыт включает работу с объектами коммерческой недвижимости, промышленными предприятиями и инфраструктурными проектами.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Придерживаюсь принципов технологичности, надежности и соответствия современным стандартам безопасности. 
              Каждый проект реализую с учетом специфики объекта и потребностей заказчика.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Лет опыта</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">Проектов</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">10</div>
                <div className="text-sm text-muted-foreground">Направлений</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold">Услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр проектных работ по слаботочным системам
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold">Портфолио</h2>
            <p className="text-lg text-muted-foreground">Реализованные проекты</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Icon name="Building2" size={64} className="text-primary group-hover:scale-110 transition-transform" />
              </div>
              <CardHeader>
                <CardTitle>Бизнес-центр класса А</CardTitle>
                <CardDescription>Комплексная система безопасности: СКУД, СОТ, ОТС, АПС, СОУЭ</CardDescription>
              </CardHeader>
            </Card>
            <Card className="overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                <Icon name="Factory" size={64} className="text-secondary group-hover:scale-110 transition-transform" />
              </div>
              <CardHeader>
                <CardTitle>Промышленное предприятие</CardTitle>
                <CardDescription>Периметральная система: ПСОТ, ОП, интеграция с диспетчерской</CardDescription>
              </CardHeader>
            </Card>
            <Card className="overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Icon name="ShoppingBag" size={64} className="text-primary group-hover:scale-110 transition-transform" />
              </div>
              <CardHeader>
                <CardTitle>Торговый комплекс</CardTitle>
                <CardDescription>Системы безопасности и инженерные сети: СВН, АПС, СОУЭ, СКС, ЛВС</CardDescription>
              </CardHeader>
            </Card>
            <Card className="overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                <Icon name="Home" size={64} className="text-secondary group-hover:scale-110 transition-transform" />
              </div>
              <CardHeader>
                <CardTitle>Жилой комплекс</CardTitle>
                <CardDescription>Системы безопасности жилого фонда: СКУД, домофония, видеонаблюдение</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="competencies" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold">Компетенции</h2>
            <p className="text-lg text-muted-foreground">Ключевые профессиональные навыки</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {competencies.map((comp, idx) => (
              <Card key={idx} className="hover:shadow-md transition-shadow">
                <CardContent className="flex items-center space-x-4 p-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle2" className="text-primary" size={20} />
                  </div>
                  <span className="font-medium text-lg">{comp}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="certificates" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold">Сертификаты</h2>
            <p className="text-lg text-muted-foreground">Профессиональные квалификации и аккредитации</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer">
              <div className="aspect-[3/4] bg-gradient-to-br from-primary/5 to-secondary/5 relative">
                <img 
                  src="https://cdn.poehali.dev/files/a96e7752-62b4-46f3-b2cf-379782d21bde.jpg"
                  alt="Диплом о профессиональной переподготовке"
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-center">Диплом о профессиональной переподготовке</CardTitle>
                <CardDescription className="text-center">
                  Государственная аккредитация № 3342/25
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8 space-y-4 flex flex-col justify-center h-full">
                <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto">
                  <Icon name="XCircle" className="text-muted-foreground" size={40} />
                </div>
                <div>
                  <p className="font-semibold text-lg mb-2">Допуск СРО</p>
                  <p className="text-muted-foreground">В процессе оформления</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold">Контакты</h2>
            <p className="text-lg text-muted-foreground">Свяжитесь со мной для обсуждения проекта</p>
          </div>
          <Card className="border-2">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-start space-x-4">
                <Icon name="User" className="text-primary mt-1" size={24} />
                <div>
                  <div className="font-semibold text-lg">Морин Константин Сергеевич</div>
                  <div className="text-muted-foreground">Инженер-проектировщик слаботочных систем</div>
                </div>
              </div>
              <Separator />
              <div className="flex items-center space-x-4">
                <Icon name="Mail" className="text-primary" size={24} />
                <a href="mailto:9818443677@mail.ru" className="text-lg hover:text-primary transition-colors">
                  9818443677@mail.ru
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Icon name="Phone" className="text-primary" size={24} />
                <a href="tel:+79818443677" className="text-lg hover:text-primary transition-colors">
                  +7 (981) 844-36-77
                </a>
              </div>
              <Separator />
              <div className="grid grid-cols-2 gap-3">
                <Button asChild size="lg" className="w-full">
                  <a href="https://wa.me/79818443677" target="_blank" rel="noopener noreferrer">
                    <Icon name="MessageCircle" className="mr-2" size={20} />
                    WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full">
                  <a href="https://t.me/KonstantinMorin" target="_blank" rel="noopener noreferrer">
                    <Icon name="Send" className="mr-2" size={20} />
                    Telegram
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t bg-muted/30">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Морин Константин Сергеевич. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;