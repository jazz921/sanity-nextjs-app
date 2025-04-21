import React, { ComponentType } from 'react'
import dynamic from 'next/dynamic';

interface Widgets {
  [key: string]: ComponentType<any> | null;
}

const Widgets: Widgets = {
  Navigation: dynamic(() => import('../widgets/Navigation')),
  ImageTextCTA_7030: dynamic(() => import('../widgets/ImageTextCTA_7030')),
}

const WidgetGenerator = (props: any) => {
  const DynamicWidget = Widgets[props.name]

  if (DynamicWidget) {
    DynamicWidget.displayName = props.name;
    return (
      <DynamicWidget
        {...props}
      />
    );
  } else {
    return null;
  }
}

export default WidgetGenerator
