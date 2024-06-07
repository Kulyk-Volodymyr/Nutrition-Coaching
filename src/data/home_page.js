import icon01 from "../assets/icons/features/icon1.png";
import icon02 from "../assets/icons/features/icon2.png";
import icon03 from "../assets/icons/features/icon3.png";
import icon04 from "../assets/icons/features/icon4.png";
import icon05 from "../assets/icons/features/icon5.png";
import icon06 from "../assets/icons/features/icon6.png";

import image01 from "../assets/images/home_page/blogArticle1.jpg";
import image02 from "../assets/images/home_page/blogArticle2.jpg";
import image03 from "../assets/images/home_page/blogArticle3.jpg";
import image04 from "../assets/images/home_page/blogArticle4.jpg";
import avatar1 from "../assets/images/home_page/avatar4.png";
import avatar2 from "../assets/images/home_page/avatar5.png";
import avatar3 from "../assets/images/home_page/avatar6.png";
import avatar4 from "../assets/images/home_page/avatar7.png";

export const FEATURES = [
  {
    title: "Personalized Nutrition Plans",
    text: "Receive a tailored nutrition plan designed specifically for your body and goals. Our certified nutritionists will consider your unique needs, dietary preferences, and health conditions to create a plan that suits you best.",
    image: icon01,
  },
  {
    title: "Guidance from Certified Nutritionists",
    text: "Our team of experienced and certified nutritionists will provide professional guidance and support throughout your journey. They will answer your questions, address your concerns, and keep you motivated as you work towards your goals.",
    image: icon02,
  },
  {
    title: "Food Tracking and Analysis",
    text: "Effortlessly track your food intake using our user-friendly app. Our nutritionists will analyze your data to provide insights into your eating habits, help you identify areas for improvement, and make personalized recommendations.",
    image: icon03,
  },
  {
    title: "Meal Planning and Recipes",
    text: "Access a vast collection of delicious and healthy recipes tailored to your dietary needs. Our nutritionists will also create personalized meal plans, making it easier for you to stay on track and enjoy nutritious meals.",
    image: icon04,
  },
  {
    title: "Lifestyle and Behavior Coaching",
    text: "Achieving sustainable results requires more than just a diet plan. Our nutritionists will work with you to develop healthy habits, address emotional eating, and provide strategies to overcome obstacles along the way.",
    image: icon05,
  },
  {
    title: "Nutritional Education and Workshops",
    text: "Expand your knowledge of nutrition through informative articles and educational workshops. Our nutritionists will equip you with the knowledge and tools to make informed choices for long-term success.",
    image: icon06,
  },
];

export const ARTICLES = [
  {
    title: "The Benefits of Hydration for Weight Loss",
    text: "Discover how staying hydrated can support your weight loss goals and improve overall health.",
    category: "Weight Loss",
    image: image01,
    imageAlt: "sports girl with bottle of water",
    author: "Emily Johnson",
    authorPhoto: avatar1,
    date: "23 May 2023",
    timeToRead: "5 min read",
  },
  {
    title: "Cultivating a Healthy Relationship with Foodt",
    text: "Learn how practicing mindful eating can help you develop a healthier relationship with food and improve your overall well-being.",
    category: "Mindful Eating",
    image: image02,
    imageAlt: "girl with apple and sandwich",
    author: "Sarah Thompson",
    authorPhoto: avatar2,
    date: "21 May 2023",
    timeToRead: "5 min read",
  },
  {
    title: "Carbohydrates, Proteins, and Fats",
    text: "Get a comprehensive understanding of macronutrients and their role in your diet for optimal health and weight management.",
    category: "Understanding Macronutrients",
    image: image03,
    imageAlt: "one girl with apple and another withsandwich",
    author: "Mark Wilson",
    authorPhoto: avatar3,
    date: "12 May 2023",
    timeToRead: "5 min read",
  },
  {
    title: "Quick and Nutritious Options",
    text: "Explore a variety of convenient and healthy snack ideas to keep you fueled throughout the day.",
    category: "Healthy Snacks on the Go",
    image: image04,
    imageAlt: "food and fruits",
    author: "Emma Johnson",
    authorPhoto: avatar4,
    date: "11 January 2023",
    timeToRead: "5 min read",
  },
];

export const PRICES = [
  {
    plan: "Basic Plan",
    info: "Get started on your health journey with our Basic Plan. It includes personalized nutrition coaching, access to our app, meal planning assistance, and email support.",
    monthlyPrice: 49,
    yearlyPrice: 294,
  },
  {
    plan: "Premium Plan",
    info: "Upgrade to our Premium Plan for enhanced features. In addition to the Basic Plan, you'll receive video consultations, priority support, and personalized recipe recommendations.",
    monthlyPrice: 79,
    yearlyPrice: 474,
  },
  {
    plan: "Ultimate Plan",
    info: "Experience the full benefits of personalized nutrition coaching with our Ultimate Plan. Enjoy all the features of the Premium Plan, along with 24/7 chat support and exclusive workshops.",
    monthlyPrice: 99,
    yearlyPrice: 594,
  },
];
