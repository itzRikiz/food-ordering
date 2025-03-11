import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "../../ui/Tabs";

const RestaurantForm = () => {
  const [activeTab, setActiveTab] = useState("basic-info");
  return (
    <>
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Restaurant Management System
        </h1>
      </div>
      <div className="w-full max-w-4xl mx-auto border rounded-lg shadow-sm">
        <Tabs value={activeTab} onChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              value="basic-info"
              disabled={activeTab !== "basic-info"}
            >
              Basic Info
            </TabsTrigger>
            <TabsTrigger
              value="menu"
              disabled={activeTab !== "menu" && activeTab !== "basic-info"}
            >
              Menus
            </TabsTrigger>
            <TabsTrigger
              value="review"
              disabled={
                activeTab !== "menu" &&
                activeTab !== "basic-info" &&
                activeTab !== "review"
              }
            >
              Reviews
            </TabsTrigger>
            <TabsTrigger disabled={activeTab !== "success"} value="success">
              Complete
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </>
  );
};

export default RestaurantForm;
