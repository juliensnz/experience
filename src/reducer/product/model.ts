import { Value } from 'pim/model/product/value'

export default (state: any = {}, action: any = {}) => {
  if (Object.keys(state).length === 0 && state.constructor === Object) {
    state = {
      "family": "loudspeakers",
      "groups": [],
      "variant_group": null,
      "categories": [
        "audio_video_sales",
        "loudspeakers",
        "sony"
      ],
      "enabled": true,
      "values": {
        "sku": [
          {
            "locale": null,
            "scope": null,
            "data": "10699783"
          }
        ],
        "description": [
          {
            "locale": "de_DE",
            "scope": "mobile",
            "data": "SRS-BTV25, 13W, USB, Bluetooth"
          },
          {
            "locale": "de_DE",
            "scope": "print",
            "data": "Bluetooth® Wireless, USB-Ladefunktion, A2DP/AVRCP Bluetooth® Profil\\n\\n- Kristallklares, kraftvolles 360°-Sound-Erlebnis\\n- Kabellose Musikübertragung von Ihrem Gerät\\n- Elegantes, kompaktes Design – passt in jeden Raum"
          },
          {
            "locale": "en_US",
            "scope": "mobile",
            "data": "SRS-BTV25, 13W, USB, Bluetooth"
          },
          {
            "locale": "en_US",
            "scope": "print",
            "data": "Bluetooth wireless, USB charging, A2DP / AVRCP Bluetooth profile\\n\\n- Crisp, powerful 360° sound experience\\n- Stream music from your device without wires\\n- Stylish, compact design - fits into any space"
          }
        ],
        "name": [
          {
            "locale": null,
            "scope": null,
            "data": "Sony SRS-BTV25"
          }
        ],
        "picture": [
          {
            "locale": null,
            "scope": null,
            "data": {
              "filePath": "a/1/f/f/a1ffdbbfb47e46ac2d82f60795b76e41a5161d86_10699783_840.jpg",
              "originalFilename": "10699783-840.jpg",
              "hash": "b4a12a4dfc68411a41fc52fedb17f32fd7645d99"
            }
          }
        ],
        "release_date": [
          {
            "locale": null,
            "scope": "ecommerce",
            "data": "01/21/2011"
          },
          {
            "locale": null,
            "scope": "mobile",
            "data": "01/21/2011"
          }
        ]
      },
      "associations": {
        "PACK": {
          "groups": [],
          "products": []
        },
        "SUBSTITUTION": {
          "groups": [],
          "products": []
        },
        "UPSELL": {
          "groups": [],
          "products": []
        },
        "X_SELL": {
          "groups": [],
          "products": []
        }
      },
      "meta": {
        "form": "pim-product-edit-form",
        "id": 1101,
        "created": {
          "id": 1535,
          "author": "John Doe - admin@example.com",
          "resource_id": "1101",
          "snapshot": {
            "sku": "10699783",
            "family": "loudspeakers",
            "groups": "",
            "categories": "audio_video_sales,loudspeakers,sony",
            "description-de_DE-mobile": "SRS-BTV25, 13W, USB, Bluetooth",
            "description-de_DE-print": "Bluetooth® Wireless, USB-Ladefunktion, A2DP/AVRCP Bluetooth® Profil\\n\\n- Kristallklares, kraftvolles 360°-Sound-Erlebnis\\n- Kabellose Musikübertragung von Ihrem Gerät\\n- Elegantes, kompaktes Design – passt in jeden Raum",
            "description-en_US-mobile": "SRS-BTV25, 13W, USB, Bluetooth",
            "description-en_US-print": "Bluetooth wireless, USB charging, A2DP / AVRCP Bluetooth profile\\n\\n- Crisp, powerful 360° sound experience\\n- Stream music from your device without wires\\n- Stylish, compact design - fits into any space",
            "name": "Sony SRS-BTV25",
            "picture": "a/1/f/f/a1ffdbbfb47e46ac2d82f60795b76e41a5161d86_10699783_840.jpg",
            "release_date-ecommerce": "2011-01-21",
            "release_date-mobile": "2011-01-21",
            "enabled": 1
          },
          "changeset": {
            "sku": {
              "old": "",
              "new": "10699783"
            },
            "family": {
              "old": "",
              "new": "loudspeakers"
            },
            "categories": {
              "old": "",
              "new": "audio_video_sales,loudspeakers,sony"
            },
            "description-de_DE-mobile": {
              "old": "",
              "new": "SRS-BTV25, 13W, USB, Bluetooth"
            },
            "description-de_DE-print": {
              "old": "",
              "new": "Bluetooth® Wireless, USB-Ladefunktion, A2DP/AVRCP Bluetooth® Profil\\n\\n- Kristallklares, kraftvolles 360°-Sound-Erlebnis\\n- Kabellose Musikübertragung von Ihrem Gerät\\n- Elegantes, kompaktes Design – passt in jeden Raum"
            },
            "description-en_US-mobile": {
              "old": "",
              "new": "SRS-BTV25, 13W, USB, Bluetooth"
            },
            "description-en_US-print": {
              "old": "",
              "new": "Bluetooth wireless, USB charging, A2DP / AVRCP Bluetooth profile\\n\\n- Crisp, powerful 360° sound experience\\n- Stream music from your device without wires\\n- Stylish, compact design - fits into any space"
            },
            "name": {
              "old": "",
              "new": "Sony SRS-BTV25"
            },
            "picture": {
              "old": "",
              "new": "a/1/f/f/a1ffdbbfb47e46ac2d82f60795b76e41a5161d86_10699783_840.jpg"
            },
            "release_date-ecommerce": {
              "old": "",
              "new": "01/21/2011"
            },
            "release_date-mobile": {
              "old": "",
              "new": "01/21/2011"
            },
            "enabled": {
              "old": "",
              "new": 1
            }
          },
          "context": null,
          "version": 1,
          "logged_at": "09/16/2016 09:35 AM",
          "pending": false
        },
        "updated": {
          "id": 1535,
          "author": "John Doe - admin@example.com",
          "resource_id": "1101",
          "snapshot": {
            "sku": "10699783",
            "family": "loudspeakers",
            "groups": "",
            "categories": "audio_video_sales,loudspeakers,sony",
            "description-de_DE-mobile": "SRS-BTV25, 13W, USB, Bluetooth",
            "description-de_DE-print": "Bluetooth® Wireless, USB-Ladefunktion, A2DP/AVRCP Bluetooth® Profil\\n\\n- Kristallklares, kraftvolles 360°-Sound-Erlebnis\\n- Kabellose Musikübertragung von Ihrem Gerät\\n- Elegantes, kompaktes Design – passt in jeden Raum",
            "description-en_US-mobile": "SRS-BTV25, 13W, USB, Bluetooth",
            "description-en_US-print": "Bluetooth wireless, USB charging, A2DP / AVRCP Bluetooth profile\\n\\n- Crisp, powerful 360° sound experience\\n- Stream music from your device without wires\\n- Stylish, compact design - fits into any space",
            "name": "Sony SRS-BTV25",
            "picture": "a/1/f/f/a1ffdbbfb47e46ac2d82f60795b76e41a5161d86_10699783_840.jpg",
            "release_date-ecommerce": "2011-01-21",
            "release_date-mobile": "2011-01-21",
            "enabled": 1
          },
          "changeset": {
            "sku": {
              "old": "",
              "new": "10699783"
            },
            "family": {
              "old": "",
              "new": "loudspeakers"
            },
            "categories": {
              "old": "",
              "new": "audio_video_sales,loudspeakers,sony"
            },
            "description-de_DE-mobile": {
              "old": "",
              "new": "SRS-BTV25, 13W, USB, Bluetooth"
            },
            "description-de_DE-print": {
              "old": "",
              "new": "Bluetooth® Wireless, USB-Ladefunktion, A2DP/AVRCP Bluetooth® Profil\\n\\n- Kristallklares, kraftvolles 360°-Sound-Erlebnis\\n- Kabellose Musikübertragung von Ihrem Gerät\\n- Elegantes, kompaktes Design – passt in jeden Raum"
            },
            "description-en_US-mobile": {
              "old": "",
              "new": "SRS-BTV25, 13W, USB, Bluetooth"
            },
            "description-en_US-print": {
              "old": "",
              "new": "Bluetooth wireless, USB charging, A2DP / AVRCP Bluetooth profile\\n\\n- Crisp, powerful 360° sound experience\\n- Stream music from your device without wires\\n- Stylish, compact design - fits into any space"
            },
            "name": {
              "old": "",
              "new": "Sony SRS-BTV25"
            },
            "picture": {
              "old": "",
              "new": "a/1/f/f/a1ffdbbfb47e46ac2d82f60795b76e41a5161d86_10699783_840.jpg"
            },
            "release_date-ecommerce": {
              "old": "",
              "new": "01/21/2011"
            },
            "release_date-mobile": {
              "old": "",
              "new": "01/21/2011"
            },
            "enabled": {
              "old": "",
              "new": 1
            }
          },
          "context": null,
          "version": 1,
          "logged_at": "09/16/2016 09:35 AM",
          "pending": false
        },
        "model_type": "product",
        "structure_version": 1474011287,
        "label": {
          "de_DE": "Sony SRS-BTV25",
          "en_US": "Sony SRS-BTV25",
          "fr_FR": "Sony SRS-BTV25"
        },
        "associations": {
          "X_SELL": {
            "groupIds": []
          },
          "UPSELL": {
            "groupIds": []
          },
          "SUBSTITUTION": {
            "groupIds": []
          },
          "PACK": {
            "groupIds": []
          }
        }
      }
    }
  };

  switch (action.type) {
    case 'FIELD_CHANGED':
      const newState = Object.assign({}, state);

      newState.values[action.field] = newState.values[action.field].map((value: Value) => {
        if (value.locale !== action.locale || value.scope !== action.scope) {
          return value
        }

        return Object.assign({}, value, {data: action.value});
      });

      state = newState;
  }

  return state;
}
