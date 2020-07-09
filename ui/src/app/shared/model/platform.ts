/**
 * Represents a Platform.
 *
 * @author Damien Vitrac
 * @author Janne Valkealahti
 */
export class Platform {

  public name: string;

  public type: string;

  public description: string;

  public options: Array<any>;

  constructor(name: string = '', type: string = '', description: string = '', options: Array<any> = []) {
    this.name = name;
    this.type = type;
    this.description = description;
    this.options = options;
  }

  /**
   * Create a Platform from a json
   * @param inputJson
   * @returns {Platform}
   */
  static fromJSON(inputJson): Platform {
    return new Platform(inputJson.name, inputJson.type, inputJson.description, inputJson.options);
  }

  /**
   * Create an Array<Platform> from a json
   * @param input
   * @returns {Array<Platform>}
   */
  static listFromJSON(input): Array<Platform> {
    if (input && Array.isArray(input)) {
      return input.map(Platform.fromJSON);
    }
    return [];
  }

}

/**
 * Represents a Platform for Tasks.
 *
 * @author Damien Vitrac
 */
export class PlatformTask extends Platform {

  constructor(name: string = '', type: string = '', description: string = '') {
    super(name, type, description);
  }

  /**
   * Create an Array<Platform> from a json
   * @param input
   * @returns {Array<Platform>}
   */
  static listFromJSON(input): Array<Platform> {
    if (input && input._embedded && input._embedded.launcherResourceList) {
      return input._embedded.launcherResourceList.map(Platform.fromJSON);
    }
    return [];
  }

}
