import React from "react";
import WidgetGenerator from "@/factory/WidgetGenerator";

const Layout = ({ data }: any) => {
  return (
    <div>
      {data.pagePlacements.map((widget: any, index: number) => (
        <section key={index} className={`${widget.name}--${widget.layoutVariant}`}>
          <WidgetGenerator {...widget} />
        </section>
      ))}
    </div>
  );
};

export default Layout;
