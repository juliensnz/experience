export default (state: any = {}, action: any = {}) => {
  if (Object.keys(state).length === 0 && state.constructor === Object) {
    state = {
      groups: [
        {
          "code": "marketing",
          "sort_order": 1,
          "attributes": [
            "sku",
            "name",
            "description",
            "response_time",
            "release_date",
            "price"
          ],
          "labels": {
            "en_US": "Marketing",
            "fr_FR": "Marketing",
            "de_DE": "Marketing"
          }
        },
        {
          "code": "technical",
          "sort_order": 2,
          "attributes": [
            "weight",
            "maximum_scan_size",
            "color_scanning",
            "power_requirements",
            "maximum_print_size",
            "sensor_type",
            "total_megapixels",
            "optical_zoom",
            "image_stabilizer",
            "camera_type",
            "thd",
            "snr",
            "headphone_connectivity",
            "maximum_video_resolution",
            "maximum_frame_rate",
            "multifunctional_functions",
            "display_srgb",
            "display_color",
            "display_diagonal",
            "viewing_area",
            "camera_brand",
            "camera_model_name",
            "short_description",
            "max_image_resolution",
            "image_resolutions",
            "supported_aspect_ratios",
            "supported_image_format",
            "lens_mount_interface",
            "focus",
            "focus_adjustement",
            "auto_focus_modes",
            "auto_focus_points",
            "auto_focus_lock",
            "auto_focus_assist_beam",
            "iso_sensitivity",
            "light_exposure_modes",
            "light_exposure_corrections",
            "light_metering",
            "auto_exposure",
            "iso_sensitivity_max",
            "iso_sensitivity_min"
          ],
          "labels": {
            "en_US": "Technical",
            "fr_FR": "Technique",
            "de_DE": "Technische"
          }
        },
        {
          "code": "design",
          "sort_order": 3,
          "attributes": [
            "tshirt_style"
          ],
          "labels": {
            "en_US": "Design",
            "fr_FR": "Style",
            "de_DE": "Stil"
          }
        },
        {
          "code": "manufacturing",
          "sort_order": 4,
          "attributes": [
            "container_material",
            "tshirt_materials"
          ],
          "labels": {
            "en_US": "Manufacturing",
            "fr_FR": "Fabrication",
            "de_DE": "Herstellung"
          }
        },
        {
          "code": "color",
          "sort_order": 5,
          "attributes": [
            "main_color",
            "secondary_color"
          ],
          "labels": {
            "en_US": "Color",
            "fr_FR": "Couleur",
            "de_DE": "Farbe"
          }
        },
        {
          "code": "size",
          "sort_order": 6,
          "attributes": [
            "clothing_size"
          ],
          "labels": {
            "en_US": "Size",
            "fr_FR": "Taille",
            "de_DE": "Größe"
          }
        },
        {
          "code": "media",
          "sort_order": 7,
          "attributes": [
            "picture",
            "pdf_description"
          ],
          "labels": {
            "en_US": "Media",
            "fr_FR": "Media",
            "de_DE": "Media"
          }
        },
        {
          "code": "other",
          "sort_order": 100,
          "attributes": [],
          "labels": {
            "en_US": "Other",
            "fr_FR": "Autre",
            "de_DE": "Ander"
          }
        }
      ],
      selected: 'marketing'
    };
  }

  switch (action.type) {
    case 'ATTRIBUTE_GROUP_SELECTED':
      return Object.assign({}, state, {selected: action.group})
  }

  return state;
}
