import React, { Fragment, useEffect, useCallback, useMemo, useState } from "react";
import PropTypes from "prop-types";
import Lightbox from 'react-image-lightbox';
import Slider from "react-slick";
import { LeftCircleFilled, RightCircleFilled } from '@ant-design/icons';

function CustomNextArrow(props) {
  return (
    <RightCircleFilled
      className="carousel_icon carousel_icon_prev"
      style={{ ...props.style, display: "block" }}
      onClick={props.onClick}
    />
  );
}

function CustomPrevArrow(props) {
  return (
    <LeftCircleFilled
      className="carousel_icon carousel_icon_next"
      style={{ ...props.style }}
      onClick={props.onClick}
    />
  );
}

const Carousel = ({
  default_image,
  visible_slides,
  infinite,
  autoplay,
  slide,
  silde_height,
  silde_max_height,
  silde_min_height,
  with_url_link,
  with_modal_showcase,
  elem_obj,
  settings_slider,
  width,
  className,
  min_width,
  min_width_mobil,
  auto_fit,
  gap,
  itemlist,
}) => {
  const [lb_visible, set_lb_visible] = useState(false);
  const [lb_index, set_lb_index] = useState(0);
  const [lb_images, set_lb_images] = useState([]);
  const [clickable, set_clickable] = useState(true);
  const [a_item, set_a_item] = useState(itemlist);

  const slider_afterChange = useCallback((newIndex) => {
    set_clickable(true);
    set_lb_index(newIndex);
  }, []);

  const slider_beforeChange = useCallback((newIndex) => {
    set_clickable(false);
    set_lb_index(newIndex);
  }, []);

  const settings = useMemo(() => {
    return {
      className: (auto_fit) ? "center slider_btn_color autofitheight" : "center slider_btn_color",
      infinite: infinite,
      slidesToShow: (a_item && a_item.length < visible_slides) ? a_item.length : visible_slides,
      slidesToScroll: 1,
      beforeChange: slider_beforeChange,
      afterChange: slider_afterChange,
      nextArrow: <CustomNextArrow />,
      prevArrow: <CustomPrevArrow />,
      autoplay: autoplay,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      ...settings_slider
    };
  }, [autoplay, infinite, a_item, settings_slider, visible_slides, slider_afterChange, slider_beforeChange]);

  const container = useCallback((item) => {
    if (elem_obj) {
      return (
        <>
          {slide && (silde_height || silde_max_height || silde_min_height) ? (
            <div
              style={{
                minHeight: silde_min_height || null,
                height: silde_height || null,
                maxHeight: silde_max_height || null,
              }}
            >
              <elem_obj item={item} prevent_click={clickable} />
            </div>
          ) : (
            <elem_obj item={item} prevent_click={clickable} />
          )}
        </>
      );
    }

    return (
      <figure
        style={slide ? {
          minHeight: silde_min_height || null,
          height: silde_height || null,
          maxHeight: silde_max_height || null,
        } : null}
      >
        <img
          className={
            (with_modal_showcase)
              ? "carousel_vertical_pictures pic_cursor"
              : (with_url_link)
                ? "carousel_vertical_pictures link_cursor"
                : "carousel_vertical_pictures"
          }
          src={item.url}
          onClick={() => {
            if (!a_item) {
              return;
            }

            if (clickable && with_modal_showcase) {
              let images = [];
              for (let i = 0; i < a_item.length; i++) {
                if (a_item[i].url) {
                  images.push(a_item[i].url);
                }
              }
              set_lb_images(images);
              set_lb_visible(true);
            }

            if (clickable && with_url_link) {
              if (item.target === "_blank") {
                window.open(item.url_click, "_blank");
              }
            }
          }}
          alt={"image_slider"}
        />
      </figure>
    );
  }, [elem_obj, with_modal_showcase, with_url_link, slide, silde_height, silde_max_height, silde_min_height, a_item, clickable]);

  useEffect(() => {
    if (itemlist.length === 0 && default_image) {
      itemlist.push({ url: document.location.origin + default_image });
    }
    set_a_item(itemlist);
  }, [itemlist, default_image]);

  return (
    <>
      {lb_visible && (
        <Lightbox
          mainSrc={lb_images[lb_index]}
          nextSrc={lb_images[(lb_index + 1) % lb_images.length]}
          prevSrc={lb_images[(lb_index + lb_images.length - 1) % lb_images.length]}
          onCloseRequest={() => set_lb_visible(false)}
          onMovePrevRequest={() => {
            set_lb_index((lb_index + lb_images.length - 1) % lb_images.length);
          }}
          onMoveNextRequest={() => {
            set_lb_index((lb_index + 1) % lb_images.length);
          }}
        />
      )}

      {!slide ? (
        <div
          className={`grid ${className}`}
          style={{
            ...style,
            gridTemplateColumns: gridTemplateColumn,
            gap: gap !== '' ? gap : null,
          }}
        >
          {a_item.map((item, i) => {
            return (
              <Fragment key={i}>
                {with_url_link ? (
                  <a target={item.target} href={item.url_click}>
                    {container(item)}
                  </a>
                ) : (
                  container(item)
                )}
              </Fragment>
            );
          })}
        </div>
      ) : (
        <Slider {...settings} ref={ref}>
          {a_item.map((item, i) => {
            return (
              with_url_link ? (
                width ? (
                  <div key={i} style={{ width: width }}>
                    <a target={item.target} href={item.url_click}>
                      {container(item)}
                    </a>
                  </div>
                ) : (
                  <a key={i} target={item.target} href={item.url_click}>
                    {container(item)}
                  </a>
                )
              ) : (
                width ? (
                  <div key={i} style={{ width: width }}>
                    {container(item)}
                  </div>
                ) : (
                  <Fragment key={i}>
                    {container(item)}
                  </Fragment>
                )
              )
            );
          })}
        </Slider>
      )}
    </>
  );
};

Carousel.propTypes = {
  default_image: PropTypes.string,
  visible_slides: PropTypes.number,
  infinite: PropTypes.bool,
  autoplay: PropTypes.bool,
  slide: PropTypes.bool,
  silde_height: PropTypes.string,
  silde_max_height: PropTypes.string,
  silde_min_height: PropTypes.string,
  with_url_link: PropTypes.bool,
  with_modal_showcase: PropTypes.bool,
  elem_obj: PropTypes.func,
    itemlist: PropTypes.array,
    className: PropTypes.string,
    style: PropTypes.object,
    gridTemplateColumn: PropTypes.string,
    gap: PropTypes.string,
    width: PropTypes.string,
    settings_slider: PropTypes.object,
    clickable: PropTypes.bool,
    auto_fit: PropTypes.bool,

};

Carousel.defaultProps = {
    default_image: null,
    visible_slides: 1,
    infinite: true,
    autoplay: false,
    slide: false,
    silde_height: null,

    silde_max_height: null,
    silde_min_height: null,
    with_url_link: false,
    with_modal_showcase: false,
    elem_obj: null,
    itemlist: [],
    className: "",

    style: {},
    gridTemplateColumn: "",
    gap: "",
    width: "",
    settings_slider: {},
    clickable: true,
    auto_fit: false,
};


