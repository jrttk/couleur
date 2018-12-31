<template>
  <div class="container">
    <!-- Toast -->
    <notifications
      group="clipboard"
      position="bottom right"
      animation-type="velocity"
      :speed="500"
      classes="toast toast-primary"
    />
    <!-- Main -->
    <div class="columns" id="add-palette-card">
      <div class="col-5 col-mx-auto">
        <div class="card">
          <div class="card-body">
            <div class="form-group" :class="error ? 'has-error' : ''">
              <input
                class="form-input"
                type="text"
                placeholder="Palette Name"
                v-model="paletteName"
              >
              <p class="form-input-hint" v-if="error">The name is invalid.</p>
            </div>
            <div class="form-group" v-for="(value, index) in colors" :key="index">
              <input class="form-input" type="text" placeholder="Hex Code" v-model="value.hex">
            </div>
            <div class="empty" @click="addColor()">
              <div class="empty-icon">
                <i class="icon icon-plus"></i>
              </div>
            </div>
            <button class="btn btn-primary" @click="addPalette(paletteName, colors)">Add</button>
          </div>
        </div>
      </div>
    </div>
    <div class="columns" v-if="colorData">
      <div class="column col-4 col-md-6 col-sm-12 my-2" v-for="value in colorData" :key="value._id">
        <div class="card palette-card">
          <div class="card-body">
            <div class="columns">
              <div class="col-6">
                <h5>{{ value.name }}</h5>
              </div>
              <div class="col-6">
                <i class="icon icon-cross" @click="removePalette(value._id)"></i>
              </div>
            </div>
            <div
              v-for="(color, index) in value.colors"
              :key="index"
              :style="{ backgroundColor: '#' + color.hex }"
              class="color-palette-icon tooltip"
              :data-tooltip="'#' + color.hex"
              v-clipboard:copy="'#' + color.hex"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      paletteName: "",
      colors: [
        {
          hex: ""
        }
      ],
      error: false,
      colorData: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    addColor: function() {
      this.colors.push({
        hex: ""
      });
    },
    addPalette: async function(paletteName, colors) {
      if (this.paletteName) {
        let data = await {
          name: paletteName,
          colors
        };
        this.$db.insert(data, function(err, newData) {});
        this.getData();
        this.paletteName = "";
        this.colors = [
          {
            hex: ""
          }
        ];
        this.$notify({
          group: "clipboard",
          text: "Hex code copied to clipboard!"
        });
      } else {
        this.error = true;
      }
    },
    removePalette: function(id) {
      this.$db.remove({ _id: id }, {}, (err, amount) => {
        this.getData();
      });
    },
    getData: function() {
      this.$db.find({}, (err, colors) => {
        this.colorData = colors.reverse();
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  padding-top: 10px;
}

.card {
  .card-body {
    .form-group {
      margin-bottom: 10px;

      .form-input-hint {
        margin-top: 5px;
        margin-bottom: 5px;
      }
    }
    .empty {
      margin-top: 10px;
      padding: 10px;

      &:hover {
        cursor: pointer;
      }

      .empty-icon {
        margin: 0;
      }
    }

    button {
      width: 100%;
      margin-top: 10px;
    }
  }
}

#add-palette-card {
  margin-bottom: 30px;
}

.palette-card {
  .card-body {
    .columns {
      align-items: center;
      margin-left: initial;
      margin-right: initial;
      margin-bottom: 15px;

      .col-6:last-of-type {
        text-align: right;

        i {
          &:hover {
            cursor: pointer;
          }
        }
      }

      * {
        margin: 0;
      }
    }
  }
}
</style>

