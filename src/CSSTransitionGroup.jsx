import { Children, PropsWithChildren, cloneElement, useRef } from "react";
import { CSSTransition as _CSSTransition } from "react-transition-group";

export const CSSTransition = (props) => {
  const nodeRef = useRef(null);

  return (
    <_CSSTransition {...props} nodeRef={nodeRef}>
      <>
        {Children.map(props.children, (child) => {
          // @ts-ignore
          return cloneElement(child, { ref: nodeRef });
        })}
      </>
    </_CSSTransition>
  );
};
