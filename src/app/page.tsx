"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TeamCardEleven from '@/components/sections/team/TeamCardEleven';
import TextAbout from '@/components/sections/about/TextAbout';
import { Activity, Award, Heart, Info, Leaf, Sparkles, Star, UserCheck } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="mediumLarge"
        background="blurBottom"
        cardStyle="layered-gradient"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "About Us",
          id: "#about",
        },
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Membership",
          id: "#membership",
        },
        {
          name: "Trainers",
          id: "#trainers",
        },
        {
          name: "Transformations",
          id: "#transformations",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Fitmee Fitness"
      button={{
        text: "Start Your Free Trial",
        href: "#contact",
      }}
      animateOnLoad={true}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      useInvertedBackground={false}
      background={{
        variant: "downward-rays-animated",
      }}
      title="Forge Your Best Self"
      description="Join 500 members transforming their bodies and minds at Fitmee Fitness. Train with elite coaches, crush your goals, and become unstoppable."
      testimonials={[
        {
          name: "Sarah J.",
          handle: "@StrongSarah",
          testimonial: "\"Best gym in Alwar, best trainer I ever saw!\"",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-fit-woman-gym-medium-shot_23-2149445951.jpg",
          imageAlt: "Sarah J. avatar",
        },
        {
          name: "Michael C.",
          handle: "@FitMike",
          testimonial: "\"The supportive trainers here truly make a difference in my workouts.\"",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-sporty-man-wearing-sportswear-headband-looking-front-with-smile-face-with-crossed-hands-chest-standing-white-wall_141793-96909.jpg",
          imageAlt: "Michael C. avatar",
        },
        {
          name: "Emily R.",
          handle: "@GymGirlEm",
          testimonial: "\"Polite and knowledgeable trainers. Always get great guidance.\"",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-smiling-athletic-woman-warming-up-while-exercising-living-room_637285-6208.jpg",
          imageAlt: "Emily R. avatar",
        },
        {
          name: "David K.",
          handle: "@KFit",
          testimonial: "\"The owner is incredibly knowledgeable and truly cares about member progress.\"",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-fit-man-gym_23-2150289978.jpg",
          imageAlt: "David K. avatar",
        },
        {
          name: "Jessica L.",
          handle: "@Jess_Lifts",
          testimonial: "\"Excellent guiding trainers who help you push your limits safely.\"",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/female-sitting-floor-studio-near-gray-wall_158538-3591.jpg",
          imageAlt: "Jessica L. avatar",
        },
        {
          name: "Chris B.",
          handle: "@BeastModeChris",
          testimonial: "\"Hard-working coaches who inspire you to be your best self every single day.\"",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-woman-with-headphones_23-2148435366.jpg",
          imageAlt: "Chris B. avatar",
        },
      ]}
      buttons={[
        {
          text: "Start Your Free Trial Today",
          href: "#contact",
        },
        {
          text: "Explore Memberships",
          href: "#membership",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/fitness-girl-gym_1157-15944.jpg"
      imageAlt="Athlete performing intense workout in a modern gym"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/fitness-girl-gym_1157-15944.jpg",
          alt: "Happy member Sarah J.",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiley-fit-woman-gym-medium-shot_23-2149445951.jpg",
          alt: "Dedicated member Michael C.",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-sporty-man-wearing-sportswear-headband-looking-front-with-smile-face-with-crossed-hands-chest-standing-white-wall_141793-96909.jpg",
          alt: "Smiling member Emily R.",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-smiling-athletic-woman-warming-up-while-exercising-living-room_637285-6208.jpg",
          alt: "Focused member David K.",
        },
        {
          src: "http://img.b2bpic.net/free-photo/front-view-fit-man-gym_23-2150289978.jpg",
          alt: "Motivated member Jessica L.",
        },
      ]}
      avatarText="Join our growing community of fitness enthusiasts!"
      marqueeItems={[
        {
          type: "text-icon",
          text: "Strength Training",
          icon: Info,
        },
        {
          type: "text-icon",
          text: "Cardio Blast",
          icon: Heart,
        },
        {
          type: "text-icon",
          text: "Yoga & Flexibility",
          icon: Leaf,
        },
        {
          type: "text-icon",
          text: "CrossFit Challenges",
          icon: Activity,
        },
        {
          type: "text-icon",
          text: "Personal Coaching",
          icon: UserCheck,
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={true}
      tag="Our Story"
      title="Empowering Your Fitness Journey"
      description="Fitmee Fitness is more than just a gym; it's a community dedicated to helping you unlock your full potential. With state-of-the-art equipment, personalized training programs, and a supportive environment, we guide athletes and beginners alike to achieve their fitness goals, cultivate lasting habits, and forge their best selves. Join our family and experience the difference of true dedication and expert guidance."
      buttons={[
        {
          text: "Learn More About Us",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Unleash Your Potential with Diverse Programs"
      description="From high-intensity workouts to mindful practices, our comprehensive services cater to every fitness level and goal. Discover the path that empowers your transformation."
      accordionItems={[
        {
          id: "weight-training",
          title: "Weight Training",
          content: "Build strength and sculpt your body with our extensive range of free weights and machines, guided by expert trainers.",
        },
        {
          id: "cardio",
          title: "Cardio Workouts",
          content: "Boost your endurance and cardiovascular health with our state-of-the-art treadmills, ellipticals, bikes, and rowing machines.",
        },
        {
          id: "crossfit",
          title: "CrossFit Sessions",
          content: "Experience high-intensity functional training designed to improve strength, agility, and overall fitness in a challenging group setting.",
        },
        {
          id: "yoga",
          title: "Yoga Classes",
          content: "Enhance flexibility, balance, and mental well-being with our calming and invigorating yoga sessions for all levels.",
        },
        {
          id: "personal-training",
          title: "Personal Training",
          content: "Achieve your specific fitness goals faster with one-on-one coaching, customized workout plans, and dedicated support from our elite trainers.",
        },
        {
          id: "zumba",
          title: "Zumba & Dance Classes",
          content: "Burn calories and have fun with our energetic Zumba classes, combining fitness and Latin dance moves for a full-body workout.",
        },
        {
          id: "nutrition",
          title: "Nutrition Consulting",
          content: "Optimize your diet and fuel your body for peak performance and recovery with personalized nutrition plans and expert advice.",
        },
        {
          id: "body-pump",
          title: "Body Pump",
          content: "A full-body barbell workout that challenges all your major muscle groups, building strength and endurance with high repetitions.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/side-view-people-training-gym_23-2150340845.jpg"
      imageAlt="People engaging in various fitness activities like weight training, yoga, and cardio."
      mediaAnimation="slide-up"
    />
  </div>

  <div id="membership" data-section="membership">
      <PricingCardOne
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "basic",
          badge: "Value",
          badgeIcon: Sparkles,
          price: "$49/month",
          subtitle: "Essential Access",
          features: [
            "Full Gym Access",
            "Group Classes",
            "Locker Room",
          ],
        },
        {
          id: "pro",
          badge: "Most Popular",
          badgeIcon: Star,
          price: "$79/month",
          subtitle: "Enhanced Experience",
          features: [
            "All Basic Features",
            "Personal Training Session (1/month)",
            "Nutrition Guide",
            "Priority Booking",
          ],
        },
        {
          id: "elite",
          badge: "Premium",
          badgeIcon: Award,
          price: "$129/month",
          subtitle: "Ultimate Transformation",
          features: [
            "All Pro Features",
            "Personal Training Sessions (4/month)",
            "Custom Meal Plan",
            "24/7 Access",
            "Spa Services Discount",
          ],
        },
      ]}
      title="Flexible Memberships for Every Goal"
      description="Choose the plan that fits your lifestyle and fitness aspirations. All plans include access to our premium facilities and expert coaching."
    />
  </div>

  <div id="trainers" data-section="trainers">
      <TeamCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      groups={[
        {
          id: "coaches",
          groupTitle: "Certified Experts",
          members: [
            {
              id: "trainer-1",
              title: "Coach Alex",
              subtitle: "CrossFit & Strength",
              detail: "Alex is a certified CrossFit Level 2 coach with over 10 years of experience in strength training and high-intensity conditioning. He specializes in helping athletes break through plateaus and achieve peak performance.",
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-fitness-girl_23-2148017347.jpg",
              imageAlt: "Coach Alex, a male fitness trainer",
            },
            {
              id: "trainer-2",
              title: "Coach Maya",
              subtitle: "Yoga & Wellness",
              detail: "Maya is a registered yoga instructor and holistic wellness coach. Her focus is on flexibility, mindful movement, and injury prevention, making fitness accessible and enjoyable for all levels.",
              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-sports-couple-is-engaged-gym_1157-21910.jpg",
              imageAlt: "Coach Maya, a female yoga instructor",
            },
            {
              id: "trainer-3",
              title: "Coach Ben",
              subtitle: "Cardio & Body Sculpting",
              detail: "Ben is an energetic and motivating trainer known for his high-energy cardio classes and effective body sculpting programs. He loves helping members discover new limits and build confidence.",
              imageSrc: "http://img.b2bpic.net/free-photo/young-sporty-man-wearing-sportswear-headband-looking-front-with-confident-smile-with-crossed-hands-chest-standing-white-wall_141793-96316.jpg",
              imageAlt: "Coach Ben, a male cardio and body sculpting trainer",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/fitness-girl-gym_1157-15944.jpg",
          imageAlt: "male personal trainer muscular",
        },
      ]}
      title="Meet Our Elite Coaching Team"
      description="Our certified trainers are passionate about guiding you to success. Specializing in various disciplines, they provide personalized support and motivation."
    />
  </div>

  <div id="transformations" data-section="transformations">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "trans-1",
          name: "Strength Gain",
          price: "Before/After",
          variant: "Male Athlete",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-athletic-woman-holding-rope_23-2148398755.jpg",
          imageAlt: "Male athlete before and after strength training",
        },
        {
          id: "trans-2",
          name: "Weight Loss",
          price: "Before/After",
          variant: "Female Journey",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-sporty-man-looking-away_23-2148375975.jpg",
          imageAlt: "Female before and after weight loss transformation",
        },
        {
          id: "trans-3",
          name: "Body Sculpting",
          price: "Before/After",
          variant: "Full Body",
          imageSrc: "http://img.b2bpic.net/free-photo/young-sportive-woman-training-yoga-asanas-rock-canyon_176420-4494.jpg",
          imageAlt: "Person before and after full body sculpting",
        },
        {
          id: "trans-4",
          name: "Endurance Boost",
          price: "Before/After",
          variant: "Runner's Progress",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-people-doing-burpees-gym_23-2149356918.jpg",
          imageAlt: "Athlete before and after endurance training",
        },
        {
          id: "trans-5",
          name: "Toning & Fitness",
          price: "Before/After",
          variant: "Female Fitness",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-healthy-life-written-notebook-round-plate-cut-vegetables-different-spices-small-bowls-white-wooden-surface_140725-63495.jpg",
          imageAlt: "Female before and after toning and fitness program",
        },
        {
          id: "trans-6",
          name: "Total Wellness",
          price: "Before/After",
          variant: "Holistic Change",
          imageSrc: "http://img.b2bpic.net/free-photo/wellness-health-lifestyle-workout-graphic-word_53876-21387.jpg",
          imageAlt: "Person before and after holistic wellness transformation",
        },
      ]}
      title="See Real Transformations"
      description="Be inspired by the incredible journeys of our members. Their dedication, combined with our expert guidance, leads to life-changing results and renewed confidence."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Alwar Sports Club",
        "FitGear Pro",
        "HealthFuel Supplements",
        "Active Living Co.",
        "City Marathon Organizers",
        "Wellness Advocates",
        "Local Fitness Bloggers",
      ]}
      title="Trusted by Local Athletes & Brands"
      description="Join a community that's building a stronger Alwar. Our impact is recognized across the region for fostering fitness and wellness."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        {
          id: "faq-1",
          title: "What types of memberships do you offer?",
          content: "We offer a range of flexible membership options including monthly, annual, and premium packages tailored to different fitness goals and access levels. Visit our Membership section for details.",
        },
        {
          id: "faq-2",
          title: "Are personal training sessions included?",
          content: "Personal training sessions are included in our Pro and Elite membership packages. Basic members can purchase sessions separately at a discounted rate.",
        },
        {
          id: "faq-3",
          title: "What classes are available for beginners?",
          content: "We offer a variety of beginner-friendly classes such as Intro to Yoga, Zumba, and foundational strength training sessions. Our trainers are also available to guide new members.",
        },
        {
          id: "faq-4",
          title: "Can I try the gym before joining?",
          content: "Absolutely! We offer a complimentary one-week free trial for all new members so you can experience our facilities and classes firsthand before committing. No obligations.",
        },
        {
          id: "faq-5",
          title: "What are your operating hours?",
          content: "Our gym is open Monday to Friday from 5 AM to 10 PM, and on weekends from 7 AM to 8 PM. Elite members enjoy 24/7 access.",
        },
      ]}
      sideTitle="Your Questions, Answered"
      sideDescription="Find quick answers to the most common questions about Fitmee Fitness memberships, classes, and facilities. We're here to help you get started."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "glowing-orb",
      }}
      tag="Ready to Transform?"
      title="Start Your Free Trial Today!"
      description="Experience the Fitmee Fitness difference firsthand. Claim your complimentary week and begin your journey towards a stronger, healthier you. Limited slots available!"
      buttons={[
        {
          text: "Claim Your Free Week",
          href: "#",
        },
        {
          text: "Contact Us",
          href: "mailto:info@fitmeefitness.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      logoSrc="asset://user-image-1"
      logoAlt="Fitmee Fitness Logo"
      columns={[
        {
          items: [
            {
              label: "Home",
              href: "#hero",
            },
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Services",
              href: "#services",
            },
            {
              label: "Membership",
              href: "#membership",
            },
          ],
        },
        {
          items: [
            {
              label: "Trainers",
              href: "#trainers",
            },
            {
              label: "Transformations",
              href: "#transformations",
            },
            {
              label: "Testimonials",
              href: "#testimonials",
            },
            {
              label: "FAQs",
              href: "#faq",
            },
          ],
        },
        {
          items: [
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Fitmee Fitness"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
