import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Carousel from './Carousel';

export default {
  title: 'Carousel',
  component: Carousel,
  argTypes: {
    default_image: {
      control: {
        type: 'text',
      },
    },
    visible_slides: {
      control: {
        type: 'number',
      },
    },
    infinite: {
      control: {
        type: 'boolean',
      },
    },
    autoplay: {
      control: {
        type: 'boolean',
      },
    },
    slide: {
      control: {
        type: 'boolean',
      },
    },
    silde_height: {
      control: {
        type: 'text',
      },
    },
    silde_max_height: {
      control: {
        type: 'text',
      },
    },
    silde_min_height: {
      control: {
        type: 'text',
      },
    },
    with_url_link: {
      control: {
        type: 'boolean',
      },
    },
    with_modal_showcase: {
      control: {
        type: 'boolean',
      },
    },
    elem_obj: {
      control: false,
    },
    settings_slider: {
      control: false,
    },
    width: {
      control: {
        type: 'text',
      },
    },
    className: {
      control: {
        type: 'text',
      },
    },
    min_width: {
      control: {
        type: 'text',
      },
    },
    min_width_mobil: {
      control: {
        type: 'text',
      },
    },
    auto_fit: {
      control: {
        type: 'boolean',
      },
    },
    gap: {
      control: {
        type: 'text',
      },
    },
  },
};


export const Default ={
    args: {
        default_image: 'https://picsum.photos/200/300',
        visible_slides: 1,
        infinite: true,
        autoplay: true,
        slide: true,
        silde_height: '300px',
        silde_max_height: '300px',
        silde_min_height: '300px',
        with_url_link: false,
        with_modal_showcase: false,
        elem_obj: [
            {
                image: 'https://picsum.photos/200/300',
                url: 'https://picsum.photos/200/300',
                alt: 'image 1',
                title: 'image 1',
                description: 'description image 1',
            },
            {
                image: 'https://picsum.photos/200/300',
                url: 'https://picsum.photos/200/300',
                alt: 'image 2',
                title: 'image 2',
                description: 'description image 2',
            },
            {
                image: 'https://picsum.photos/200/300',
                url: 'https://picsum.photos/200/300',
                alt: 'image 3',
                title: 'image 3',

                description: 'description image 3',
            },

        ],
        settings_slider: {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        },
        width: '100%',
        className: 'carousel',
        min_width: '300px',
        min_width_mobil: '300px',
        auto_fit: true,
        gap: '0px',
}
};
