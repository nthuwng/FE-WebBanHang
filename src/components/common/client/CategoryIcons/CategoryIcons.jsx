import { FaApple } from "react-icons/fa";
import { SiSamsung, SiOppo, SiXiaomi } from "react-icons/si";
import { motion } from "framer-motion";
import "./CategoryIcons.css";

const CategoryIcons = (props) => {
  const { category, setCategory } = props;
  
  const categories = [
    { 
      name: "Apple", 
      icon: FaApple, 
      color: "black", 
      size: 40,
      hoverColor: "#333" 
    },
    { 
      name: "Samsung", 
      icon: SiSamsung, 
      color: "#1428A0", 
      size: 70,
      hoverColor: "#0A3299" 
    },
    { 
      name: "Oppo", 
      icon: SiOppo, 
      color: "#09B83E", 
      size: 60,
      hoverColor: "#08A838" 
    },
    { 
      name: "Xiaomi", 
      icon: SiXiaomi, 
      color: "#FF6700", 
      size: 40,
      hoverColor: "#E55D00" 
    }
  ];

  return (
    <div className="icon-container-categoryIcons">
      {categories.map((item) => {
        const Icon = item.icon;
        const isSelected = category === item.name;
        
        return (
          <motion.div
            key={item.name}
            className={`icon-box-categoryIcons ${isSelected ? "selected" : ""}`}
            onClick={() => setCategory(item.name)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Icon 
              color={item.color} 
              size={item.size} 
              style={{ 
                transition: "all 0.3s ease",
                transform: isSelected ? "scale(1.1)" : "scale(1)"
              }}
            />
            {isSelected && (
              <motion.div
                className="brand-name"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {item.name}
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default CategoryIcons;