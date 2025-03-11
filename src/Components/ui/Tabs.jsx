import { createContext, useContext, useState } from "react";

const TabsContext = createContext(null);

export function Tabs({ children, value, onChange, className = "" }) {
  const [activeTab, setActiveTab] = useState(value);

  const handleTabChange = (newValue) => {
    setActiveTab(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <TabsContext.Provider value={{ activeTab, onChange: handleTabChange }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ children, className = "" }) {
  return <div className={`flex border-b ${className}`}>{children}</div>;
}

export function TabsTrigger({ children, value, disabled = false }) {
  const { activeTab, onChange } = useContext(TabsContext);
  const isActive = activeTab === value;

  return (
    <button
      className={`px-4 py-2 text-sm font-medium transition-colors ${
        isActive
          ? "border-b-2 border-primary text-primary"
          : "text-gray-500 hover:text-gray-700"
      } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
      onClick={() => !disabled && onChange(value)}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export function TabsContent({ children, value, className = "" }) {
  const { activeTab } = useContext(TabsContext);

  if (activeTab !== value) {
    return null;
  }

  return <div className={className}>{children}</div>;
}
