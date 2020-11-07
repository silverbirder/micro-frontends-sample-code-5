export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  uuid: any;
  timestamptz: any;
  Date: any;
  ObjectID: any;
}

export interface Query {
  readonly __typename?: 'Query';
  /** fetch data from the table: "users" */
  readonly users: ReadonlyArray<users>;
  /** fetch aggregated fields from the table: "users" */
  readonly users_aggregate: users_aggregate;
  /** fetch data from the table: "users" using primary key columns */
  readonly users_by_pk?: Maybe<users>;
  readonly capsules?: Maybe<ReadonlyArray<Maybe<Capsule>>>;
  readonly capsulesPast?: Maybe<ReadonlyArray<Maybe<Capsule>>>;
  readonly capsulesUpcoming?: Maybe<ReadonlyArray<Maybe<Capsule>>>;
  readonly capsule?: Maybe<Capsule>;
  readonly company?: Maybe<Info>;
  readonly cores?: Maybe<ReadonlyArray<Maybe<Core>>>;
  readonly coresPast?: Maybe<ReadonlyArray<Maybe<Core>>>;
  readonly coresUpcoming?: Maybe<ReadonlyArray<Maybe<Core>>>;
  readonly core?: Maybe<Core>;
  readonly dragons?: Maybe<ReadonlyArray<Maybe<Dragon>>>;
  readonly dragon?: Maybe<Dragon>;
  readonly histories?: Maybe<ReadonlyArray<Maybe<History>>>;
  readonly historiesResult?: Maybe<HistoriesResult>;
  readonly history?: Maybe<History>;
  readonly landpads?: Maybe<ReadonlyArray<Maybe<Landpad>>>;
  readonly landpad?: Maybe<Landpad>;
  readonly launches?: Maybe<ReadonlyArray<Maybe<Launch>>>;
  readonly launchesPast?: Maybe<ReadonlyArray<Maybe<Launch>>>;
  readonly launchesPastResult?: Maybe<LaunchesPastResult>;
  readonly launchesUpcoming?: Maybe<ReadonlyArray<Maybe<Launch>>>;
  readonly launch?: Maybe<Launch>;
  readonly launchLatest?: Maybe<Launch>;
  readonly launchNext?: Maybe<Launch>;
  readonly launchpads?: Maybe<ReadonlyArray<Maybe<Launchpad>>>;
  readonly launchpad?: Maybe<Launchpad>;
  readonly missions?: Maybe<ReadonlyArray<Maybe<Mission>>>;
  readonly missionsResult?: Maybe<MissionResult>;
  readonly mission?: Maybe<Mission>;
  readonly payloads?: Maybe<ReadonlyArray<Maybe<Payload>>>;
  readonly payload?: Maybe<Payload>;
  readonly roadster?: Maybe<Roadster>;
  readonly rockets?: Maybe<ReadonlyArray<Maybe<Rocket>>>;
  readonly rocketsResult?: Maybe<RocketsResult>;
  readonly rocket?: Maybe<Rocket>;
  readonly ships?: Maybe<ReadonlyArray<Maybe<Ship>>>;
  readonly shipsResult?: Maybe<ShipsResult>;
  readonly ship?: Maybe<Ship>;
  readonly location?: Maybe<Location>;
}


export interface QueryusersArgs {
  distinct_on?: Maybe<ReadonlyArray<users_select_column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<users_order_by>>;
  where?: Maybe<users_bool_exp>;
}


export interface Queryusers_aggregateArgs {
  distinct_on?: Maybe<ReadonlyArray<users_select_column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<users_order_by>>;
  where?: Maybe<users_bool_exp>;
}


export interface Queryusers_by_pkArgs {
  id: Scalars['uuid'];
}


export interface QuerycapsulesArgs {
  find?: Maybe<CapsulesFind>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
}


export interface QuerycapsulesPastArgs {
  find?: Maybe<CapsulesFind>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
}


export interface QuerycapsulesUpcomingArgs {
  find?: Maybe<CapsulesFind>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
}


export interface QuerycapsuleArgs {
  id: Scalars['ID'];
}


export interface QuerycoresArgs {
  find?: Maybe<CoresFind>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
}


export interface QuerycoresPastArgs {
  find?: Maybe<CoresFind>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
}


export interface QuerycoresUpcomingArgs {
  find?: Maybe<CoresFind>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
}


export interface QuerycoreArgs {
  id: Scalars['ID'];
}


export interface QuerydragonsArgs {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}


export interface QuerydragonArgs {
  id: Scalars['ID'];
}


export interface QueryhistoriesArgs {
  find?: Maybe<HistoryFind>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
}


export interface QueryhistoriesResultArgs {
  find?: Maybe<HistoryFind>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
}


export interface QueryhistoryArgs {
  id: Scalars['ID'];
}


export interface QuerylandpadsArgs {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}


export interface QuerylandpadArgs {
  id: Scalars['ID'];
}


export interface QuerylaunchesArgs {
  find?: Maybe<LaunchFind>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
}


export interface QuerylaunchesPastArgs {
  find?: Maybe<LaunchFind>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
}


export interface QuerylaunchesPastResultArgs {
  find?: Maybe<LaunchFind>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
}


export interface QuerylaunchesUpcomingArgs {
  find?: Maybe<LaunchFind>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
}


export interface QuerylaunchArgs {
  id: Scalars['ID'];
}


export interface QuerylaunchLatestArgs {
  offset?: Maybe<Scalars['Int']>;
}


export interface QuerylaunchNextArgs {
  offset?: Maybe<Scalars['Int']>;
}


export interface QuerylaunchpadsArgs {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}


export interface QuerylaunchpadArgs {
  id: Scalars['ID'];
}


export interface QuerymissionsArgs {
  find?: Maybe<MissionsFind>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}


export interface QuerymissionsResultArgs {
  find?: Maybe<MissionsFind>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}


export interface QuerymissionArgs {
  id: Scalars['ID'];
}


export interface QuerypayloadsArgs {
  find?: Maybe<PayloadsFind>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
}


export interface QuerypayloadArgs {
  id: Scalars['ID'];
}


export interface QueryrocketsArgs {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}


export interface QueryrocketsResultArgs {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}


export interface QueryrocketArgs {
  id: Scalars['ID'];
}


export interface QueryshipsArgs {
  find?: Maybe<ShipsFind>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
}


export interface QueryshipsResultArgs {
  find?: Maybe<ShipsFind>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
}


export interface QueryshipArgs {
  id: Scalars['ID'];
}

/** select columns of table "users" */
export const enum users_select_column {
  /** column name */
  id = 'id',
  /** column name */
  name = 'name',
  /** column name */
  rocket = 'rocket',
  /** column name */
  timestamp = 'timestamp',
  /** column name */
  twitter = 'twitter'
};

/** ordering options when selecting data from "users" */
export interface users_order_by {
  readonly id?: Maybe<order_by>;
  readonly name?: Maybe<order_by>;
  readonly rocket?: Maybe<order_by>;
  readonly timestamp?: Maybe<order_by>;
  readonly twitter?: Maybe<order_by>;
}

/** column ordering options */
export const enum order_by {
  /** in the ascending order, nulls last */
  asc = 'asc',
  /** in the ascending order, nulls first */
  asc_nulls_first = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  asc_nulls_last = 'asc_nulls_last',
  /** in the descending order, nulls first */
  desc = 'desc',
  /** in the descending order, nulls first */
  desc_nulls_first = 'desc_nulls_first',
  /** in the descending order, nulls last */
  desc_nulls_last = 'desc_nulls_last'
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export interface users_bool_exp {
  readonly _and?: Maybe<ReadonlyArray<Maybe<users_bool_exp>>>;
  readonly _not?: Maybe<users_bool_exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<users_bool_exp>>>;
  readonly id?: Maybe<uuid_comparison_exp>;
  readonly name?: Maybe<String_comparison_exp>;
  readonly rocket?: Maybe<String_comparison_exp>;
  readonly timestamp?: Maybe<timestamptz_comparison_exp>;
  readonly twitter?: Maybe<String_comparison_exp>;
}

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export interface uuid_comparison_exp {
  readonly _eq?: Maybe<Scalars['uuid']>;
  readonly _gt?: Maybe<Scalars['uuid']>;
  readonly _gte?: Maybe<Scalars['uuid']>;
  readonly _in?: Maybe<ReadonlyArray<Scalars['uuid']>>;
  readonly _is_null?: Maybe<Scalars['Boolean']>;
  readonly _lt?: Maybe<Scalars['uuid']>;
  readonly _lte?: Maybe<Scalars['uuid']>;
  readonly _neq?: Maybe<Scalars['uuid']>;
  readonly _nin?: Maybe<ReadonlyArray<Scalars['uuid']>>;
}


/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export interface String_comparison_exp {
  readonly _eq?: Maybe<Scalars['String']>;
  readonly _gt?: Maybe<Scalars['String']>;
  readonly _gte?: Maybe<Scalars['String']>;
  readonly _ilike?: Maybe<Scalars['String']>;
  readonly _in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly _is_null?: Maybe<Scalars['Boolean']>;
  readonly _like?: Maybe<Scalars['String']>;
  readonly _lt?: Maybe<Scalars['String']>;
  readonly _lte?: Maybe<Scalars['String']>;
  readonly _neq?: Maybe<Scalars['String']>;
  readonly _nilike?: Maybe<Scalars['String']>;
  readonly _nin?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly _nlike?: Maybe<Scalars['String']>;
  readonly _nsimilar?: Maybe<Scalars['String']>;
  readonly _similar?: Maybe<Scalars['String']>;
}

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export interface timestamptz_comparison_exp {
  readonly _eq?: Maybe<Scalars['timestamptz']>;
  readonly _gt?: Maybe<Scalars['timestamptz']>;
  readonly _gte?: Maybe<Scalars['timestamptz']>;
  readonly _in?: Maybe<ReadonlyArray<Scalars['timestamptz']>>;
  readonly _is_null?: Maybe<Scalars['Boolean']>;
  readonly _lt?: Maybe<Scalars['timestamptz']>;
  readonly _lte?: Maybe<Scalars['timestamptz']>;
  readonly _neq?: Maybe<Scalars['timestamptz']>;
  readonly _nin?: Maybe<ReadonlyArray<Scalars['timestamptz']>>;
}


/** columns and relationships of "users" */
export interface users {
  readonly __typename?: 'users';
  readonly id: Scalars['uuid'];
  readonly name?: Maybe<Scalars['String']>;
  readonly rocket?: Maybe<Scalars['String']>;
  readonly timestamp: Scalars['timestamptz'];
  readonly twitter?: Maybe<Scalars['String']>;
}

/** aggregated selection of "users" */
export interface users_aggregate {
  readonly __typename?: 'users_aggregate';
  readonly aggregate?: Maybe<users_aggregate_fields>;
  readonly nodes: ReadonlyArray<users>;
}

/** aggregate fields of "users" */
export interface users_aggregate_fields {
  readonly __typename?: 'users_aggregate_fields';
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<users_max_fields>;
  readonly min?: Maybe<users_min_fields>;
}


/** aggregate fields of "users" */
export interface users_aggregate_fieldscountArgs {
  columns?: Maybe<ReadonlyArray<users_select_column>>;
  distinct?: Maybe<Scalars['Boolean']>;
}

/** aggregate max on columns */
export interface users_max_fields {
  readonly __typename?: 'users_max_fields';
  readonly name?: Maybe<Scalars['String']>;
  readonly rocket?: Maybe<Scalars['String']>;
  readonly timestamp?: Maybe<Scalars['timestamptz']>;
  readonly twitter?: Maybe<Scalars['String']>;
}

/** aggregate min on columns */
export interface users_min_fields {
  readonly __typename?: 'users_min_fields';
  readonly name?: Maybe<Scalars['String']>;
  readonly rocket?: Maybe<Scalars['String']>;
  readonly timestamp?: Maybe<Scalars['timestamptz']>;
  readonly twitter?: Maybe<Scalars['String']>;
}

export interface CapsulesFind {
  readonly id?: Maybe<Scalars['ID']>;
  readonly landings?: Maybe<Scalars['Int']>;
  readonly mission?: Maybe<Scalars['String']>;
  readonly original_launch?: Maybe<Scalars['Date']>;
  readonly reuse_count?: Maybe<Scalars['Int']>;
  readonly status?: Maybe<Scalars['String']>;
  readonly type?: Maybe<Scalars['String']>;
}


export interface Capsule {
  readonly __typename?: 'Capsule';
  readonly id?: Maybe<Scalars['ID']>;
  readonly landings?: Maybe<Scalars['Int']>;
  readonly missions?: Maybe<ReadonlyArray<Maybe<CapsuleMission>>>;
  readonly original_launch?: Maybe<Scalars['Date']>;
  readonly reuse_count?: Maybe<Scalars['Int']>;
  readonly status?: Maybe<Scalars['String']>;
  readonly type?: Maybe<Scalars['String']>;
  readonly dragon?: Maybe<Dragon>;
}

export interface CapsuleMission {
  readonly __typename?: 'CapsuleMission';
  readonly flight?: Maybe<Scalars['Int']>;
  readonly name?: Maybe<Scalars['String']>;
}

export interface Dragon {
  readonly __typename?: 'Dragon';
  readonly active?: Maybe<Scalars['Boolean']>;
  readonly crew_capacity?: Maybe<Scalars['Int']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly diameter?: Maybe<Distance>;
  readonly dry_mass_kg?: Maybe<Scalars['Int']>;
  readonly dry_mass_lb?: Maybe<Scalars['Int']>;
  readonly first_flight?: Maybe<Scalars['String']>;
  readonly heat_shield?: Maybe<DragonHeatShield>;
  readonly height_w_trunk?: Maybe<Distance>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly launch_payload_mass?: Maybe<Mass>;
  readonly launch_payload_vol?: Maybe<Volume>;
  readonly name?: Maybe<Scalars['String']>;
  readonly orbit_duration_yr?: Maybe<Scalars['Int']>;
  readonly pressurized_capsule?: Maybe<DragonPressurizedCapsule>;
  readonly return_payload_mass?: Maybe<Mass>;
  readonly return_payload_vol?: Maybe<Volume>;
  readonly sidewall_angle_deg?: Maybe<Scalars['Float']>;
  readonly thrusters?: Maybe<ReadonlyArray<Maybe<DragonThrust>>>;
  readonly trunk?: Maybe<DragonTrunk>;
  readonly type?: Maybe<Scalars['String']>;
  readonly wikipedia?: Maybe<Scalars['String']>;
}

export interface Distance {
  readonly __typename?: 'Distance';
  readonly feet?: Maybe<Scalars['Float']>;
  readonly meters?: Maybe<Scalars['Float']>;
}

export interface DragonHeatShield {
  readonly __typename?: 'DragonHeatShield';
  readonly dev_partner?: Maybe<Scalars['String']>;
  readonly material?: Maybe<Scalars['String']>;
  readonly size_meters?: Maybe<Scalars['Float']>;
  readonly temp_degrees?: Maybe<Scalars['Int']>;
}

export interface Mass {
  readonly __typename?: 'Mass';
  readonly kg?: Maybe<Scalars['Int']>;
  readonly lb?: Maybe<Scalars['Int']>;
}

export interface Volume {
  readonly __typename?: 'Volume';
  readonly cubic_feet?: Maybe<Scalars['Int']>;
  readonly cubic_meters?: Maybe<Scalars['Int']>;
}

export interface DragonPressurizedCapsule {
  readonly __typename?: 'DragonPressurizedCapsule';
  readonly payload_volume?: Maybe<Volume>;
}

export interface DragonThrust {
  readonly __typename?: 'DragonThrust';
  readonly amount?: Maybe<Scalars['Int']>;
  readonly fuel_1?: Maybe<Scalars['String']>;
  readonly fuel_2?: Maybe<Scalars['String']>;
  readonly pods?: Maybe<Scalars['Int']>;
  readonly thrust?: Maybe<Force>;
  readonly type?: Maybe<Scalars['String']>;
}

export interface Force {
  readonly __typename?: 'Force';
  readonly kN?: Maybe<Scalars['Float']>;
  readonly lbf?: Maybe<Scalars['Float']>;
}

export interface DragonTrunk {
  readonly __typename?: 'DragonTrunk';
  readonly cargo?: Maybe<DragonTrunkCargo>;
  readonly trunk_volume?: Maybe<Volume>;
}

export interface DragonTrunkCargo {
  readonly __typename?: 'DragonTrunkCargo';
  readonly solar_array?: Maybe<Scalars['Int']>;
  readonly unpressurized_cargo?: Maybe<Scalars['Boolean']>;
}

export interface Info {
  readonly __typename?: 'Info';
  readonly ceo?: Maybe<Scalars['String']>;
  readonly coo?: Maybe<Scalars['String']>;
  readonly cto_propulsion?: Maybe<Scalars['String']>;
  readonly cto?: Maybe<Scalars['String']>;
  readonly employees?: Maybe<Scalars['Int']>;
  readonly founded?: Maybe<Scalars['Int']>;
  readonly founder?: Maybe<Scalars['String']>;
  readonly headquarters?: Maybe<Address>;
  readonly launch_sites?: Maybe<Scalars['Int']>;
  readonly links?: Maybe<InfoLinks>;
  readonly name?: Maybe<Scalars['String']>;
  readonly summary?: Maybe<Scalars['String']>;
  readonly test_sites?: Maybe<Scalars['Int']>;
  readonly valuation?: Maybe<Scalars['Float']>;
  readonly vehicles?: Maybe<Scalars['Int']>;
}

export interface Address {
  readonly __typename?: 'Address';
  readonly address?: Maybe<Scalars['String']>;
  readonly city?: Maybe<Scalars['String']>;
  readonly state?: Maybe<Scalars['String']>;
}

export interface InfoLinks {
  readonly __typename?: 'InfoLinks';
  readonly elon_twitter?: Maybe<Scalars['String']>;
  readonly flickr?: Maybe<Scalars['String']>;
  readonly twitter?: Maybe<Scalars['String']>;
  readonly website?: Maybe<Scalars['String']>;
}

export interface CoresFind {
  readonly asds_attempts?: Maybe<Scalars['Int']>;
  readonly asds_landings?: Maybe<Scalars['Int']>;
  readonly block?: Maybe<Scalars['Int']>;
  readonly id?: Maybe<Scalars['String']>;
  readonly missions?: Maybe<Scalars['String']>;
  readonly original_launch?: Maybe<Scalars['Date']>;
  readonly reuse_count?: Maybe<Scalars['Int']>;
  readonly rtls_attempts?: Maybe<Scalars['Int']>;
  readonly rtls_landings?: Maybe<Scalars['Int']>;
  readonly status?: Maybe<Scalars['String']>;
  readonly water_landing?: Maybe<Scalars['Boolean']>;
}

export interface Core {
  readonly __typename?: 'Core';
  readonly asds_attempts?: Maybe<Scalars['Int']>;
  readonly asds_landings?: Maybe<Scalars['Int']>;
  readonly block?: Maybe<Scalars['Int']>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly missions?: Maybe<ReadonlyArray<Maybe<CapsuleMission>>>;
  readonly original_launch?: Maybe<Scalars['Date']>;
  readonly reuse_count?: Maybe<Scalars['Int']>;
  readonly rtls_attempts?: Maybe<Scalars['Int']>;
  readonly rtls_landings?: Maybe<Scalars['Int']>;
  readonly status?: Maybe<Scalars['String']>;
  readonly water_landing?: Maybe<Scalars['Boolean']>;
}

export interface HistoryFind {
  readonly end?: Maybe<Scalars['Date']>;
  readonly flight_number?: Maybe<Scalars['Int']>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly start?: Maybe<Scalars['Date']>;
}

export interface History {
  readonly __typename?: 'History';
  readonly details?: Maybe<Scalars['String']>;
  readonly event_date_unix?: Maybe<Scalars['Date']>;
  readonly event_date_utc?: Maybe<Scalars['Date']>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly links?: Maybe<Link>;
  readonly title?: Maybe<Scalars['String']>;
  readonly flight?: Maybe<Launch>;
}

export interface Link {
  readonly __typename?: 'Link';
  readonly article?: Maybe<Scalars['String']>;
  readonly reddit?: Maybe<Scalars['String']>;
  readonly wikipedia?: Maybe<Scalars['String']>;
}

export interface Launch {
  readonly __typename?: 'Launch';
  readonly details?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly is_tentative?: Maybe<Scalars['Boolean']>;
  readonly launch_date_local?: Maybe<Scalars['Date']>;
  readonly launch_date_unix?: Maybe<Scalars['Date']>;
  readonly launch_date_utc?: Maybe<Scalars['Date']>;
  readonly launch_site?: Maybe<LaunchSite>;
  readonly launch_success?: Maybe<Scalars['Boolean']>;
  readonly launch_year?: Maybe<Scalars['String']>;
  readonly links?: Maybe<LaunchLinks>;
  readonly mission_id?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly mission_name?: Maybe<Scalars['String']>;
  readonly rocket?: Maybe<LaunchRocket>;
  readonly static_fire_date_unix?: Maybe<Scalars['Date']>;
  readonly static_fire_date_utc?: Maybe<Scalars['Date']>;
  readonly telemetry?: Maybe<LaunchTelemetry>;
  readonly tentative_max_precision?: Maybe<Scalars['String']>;
  readonly upcoming?: Maybe<Scalars['Boolean']>;
  readonly ships?: Maybe<ReadonlyArray<Maybe<Ship>>>;
}

export interface LaunchSite {
  readonly __typename?: 'LaunchSite';
  readonly site_id?: Maybe<Scalars['String']>;
  readonly site_name_long?: Maybe<Scalars['String']>;
  readonly site_name?: Maybe<Scalars['String']>;
}

export interface LaunchLinks {
  readonly __typename?: 'LaunchLinks';
  readonly article_link?: Maybe<Scalars['String']>;
  readonly flickr_images?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly mission_patch_small?: Maybe<Scalars['String']>;
  readonly mission_patch?: Maybe<Scalars['String']>;
  readonly presskit?: Maybe<Scalars['String']>;
  readonly reddit_campaign?: Maybe<Scalars['String']>;
  readonly reddit_launch?: Maybe<Scalars['String']>;
  readonly reddit_media?: Maybe<Scalars['String']>;
  readonly reddit_recovery?: Maybe<Scalars['String']>;
  readonly video_link?: Maybe<Scalars['String']>;
  readonly wikipedia?: Maybe<Scalars['String']>;
}

export interface LaunchRocket {
  readonly __typename?: 'LaunchRocket';
  readonly fairings?: Maybe<LaunchRocketFairings>;
  readonly first_stage?: Maybe<LaunchRocketFirstStage>;
  readonly rocket_name?: Maybe<Scalars['String']>;
  readonly rocket_type?: Maybe<Scalars['String']>;
  readonly rocket?: Maybe<Rocket>;
  readonly second_stage?: Maybe<LaunchRocketSecondStage>;
}

export interface LaunchRocketFairings {
  readonly __typename?: 'LaunchRocketFairings';
  readonly recovered?: Maybe<Scalars['Boolean']>;
  readonly recovery_attempt?: Maybe<Scalars['Boolean']>;
  readonly reused?: Maybe<Scalars['Boolean']>;
  readonly ship?: Maybe<Scalars['String']>;
}

export interface LaunchRocketFirstStage {
  readonly __typename?: 'LaunchRocketFirstStage';
  readonly cores?: Maybe<ReadonlyArray<Maybe<LaunchRocketFirstStageCore>>>;
}

export interface LaunchRocketFirstStageCore {
  readonly __typename?: 'LaunchRocketFirstStageCore';
  readonly block?: Maybe<Scalars['Int']>;
  readonly core?: Maybe<Core>;
  readonly flight?: Maybe<Scalars['Int']>;
  readonly gridfins?: Maybe<Scalars['Boolean']>;
  readonly land_success?: Maybe<Scalars['Boolean']>;
  readonly landing_intent?: Maybe<Scalars['Boolean']>;
  readonly landing_type?: Maybe<Scalars['String']>;
  readonly landing_vehicle?: Maybe<Scalars['String']>;
  readonly legs?: Maybe<Scalars['Boolean']>;
  readonly reused?: Maybe<Scalars['Boolean']>;
}

export interface Rocket {
  readonly __typename?: 'Rocket';
  readonly active?: Maybe<Scalars['Boolean']>;
  readonly boosters?: Maybe<Scalars['Int']>;
  readonly company?: Maybe<Scalars['String']>;
  readonly cost_per_launch?: Maybe<Scalars['Int']>;
  readonly country?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly diameter?: Maybe<Distance>;
  readonly engines?: Maybe<RocketEngines>;
  readonly first_flight?: Maybe<Scalars['Date']>;
  readonly first_stage?: Maybe<RocketFirstStage>;
  readonly height?: Maybe<Distance>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly landing_legs?: Maybe<RocketLandingLegs>;
  readonly mass?: Maybe<Mass>;
  readonly name?: Maybe<Scalars['String']>;
  readonly payload_weights?: Maybe<ReadonlyArray<Maybe<RocketPayloadWeight>>>;
  readonly second_stage?: Maybe<RocketSecondStage>;
  readonly stages?: Maybe<Scalars['Int']>;
  readonly success_rate_pct?: Maybe<Scalars['Int']>;
  readonly type?: Maybe<Scalars['String']>;
  readonly wikipedia?: Maybe<Scalars['String']>;
}

export interface RocketEngines {
  readonly __typename?: 'RocketEngines';
  readonly number?: Maybe<Scalars['Int']>;
  readonly type?: Maybe<Scalars['String']>;
  readonly version?: Maybe<Scalars['String']>;
  readonly layout?: Maybe<Scalars['String']>;
  readonly engine_loss_max?: Maybe<Scalars['String']>;
  readonly propellant_1?: Maybe<Scalars['String']>;
  readonly propellant_2?: Maybe<Scalars['String']>;
  readonly thrust_sea_level?: Maybe<Force>;
  readonly thrust_vacuum?: Maybe<Force>;
  readonly thrust_to_weight?: Maybe<Scalars['Float']>;
}

export interface RocketFirstStage {
  readonly __typename?: 'RocketFirstStage';
  readonly burn_time_sec?: Maybe<Scalars['Int']>;
  readonly engines?: Maybe<Scalars['Int']>;
  readonly fuel_amount_tons?: Maybe<Scalars['Float']>;
  readonly reusable?: Maybe<Scalars['Boolean']>;
  readonly thrust_sea_level?: Maybe<Force>;
  readonly thrust_vacuum?: Maybe<Force>;
}

export interface RocketLandingLegs {
  readonly __typename?: 'RocketLandingLegs';
  readonly number?: Maybe<Scalars['Int']>;
  readonly material?: Maybe<Scalars['String']>;
}

export interface RocketPayloadWeight {
  readonly __typename?: 'RocketPayloadWeight';
  readonly id?: Maybe<Scalars['String']>;
  readonly kg?: Maybe<Scalars['Int']>;
  readonly lb?: Maybe<Scalars['Int']>;
  readonly name?: Maybe<Scalars['String']>;
}

export interface RocketSecondStage {
  readonly __typename?: 'RocketSecondStage';
  readonly burn_time_sec?: Maybe<Scalars['Int']>;
  readonly engines?: Maybe<Scalars['Int']>;
  readonly fuel_amount_tons?: Maybe<Scalars['Float']>;
  readonly payloads?: Maybe<RocketSecondStagePayloads>;
  readonly thrust?: Maybe<Force>;
}

export interface RocketSecondStagePayloads {
  readonly __typename?: 'RocketSecondStagePayloads';
  readonly option_1?: Maybe<Scalars['String']>;
  readonly composite_fairing?: Maybe<RocketSecondStagePayloadCompositeFairing>;
}

export interface RocketSecondStagePayloadCompositeFairing {
  readonly __typename?: 'RocketSecondStagePayloadCompositeFairing';
  readonly height?: Maybe<Distance>;
  readonly diameter?: Maybe<Distance>;
}

export interface LaunchRocketSecondStage {
  readonly __typename?: 'LaunchRocketSecondStage';
  readonly block?: Maybe<Scalars['Int']>;
  readonly payloads?: Maybe<ReadonlyArray<Maybe<Payload>>>;
}

export interface Payload {
  readonly __typename?: 'Payload';
  readonly customers?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly manufacturer?: Maybe<Scalars['String']>;
  readonly nationality?: Maybe<Scalars['String']>;
  readonly norad_id?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly orbit_params?: Maybe<PayloadOrbitParams>;
  readonly orbit?: Maybe<Scalars['String']>;
  readonly payload_mass_kg?: Maybe<Scalars['Float']>;
  readonly payload_mass_lbs?: Maybe<Scalars['Float']>;
  readonly payload_type?: Maybe<Scalars['String']>;
  readonly reused?: Maybe<Scalars['Boolean']>;
}

export interface PayloadOrbitParams {
  readonly __typename?: 'PayloadOrbitParams';
  readonly apoapsis_km?: Maybe<Scalars['Float']>;
  readonly arg_of_pericenter?: Maybe<Scalars['Float']>;
  readonly eccentricity?: Maybe<Scalars['Float']>;
  readonly epoch?: Maybe<Scalars['Date']>;
  readonly inclination_deg?: Maybe<Scalars['Float']>;
  readonly lifespan_years?: Maybe<Scalars['Float']>;
  readonly longitude?: Maybe<Scalars['Float']>;
  readonly mean_anomaly?: Maybe<Scalars['Float']>;
  readonly mean_motion?: Maybe<Scalars['Float']>;
  readonly periapsis_km?: Maybe<Scalars['Float']>;
  readonly period_min?: Maybe<Scalars['Float']>;
  readonly raan?: Maybe<Scalars['Float']>;
  readonly reference_system?: Maybe<Scalars['String']>;
  readonly regime?: Maybe<Scalars['String']>;
  readonly semi_major_axis_km?: Maybe<Scalars['Float']>;
}

export interface LaunchTelemetry {
  readonly __typename?: 'LaunchTelemetry';
  readonly flight_club?: Maybe<Scalars['String']>;
}

export interface Ship {
  readonly __typename?: 'Ship';
  readonly abs?: Maybe<Scalars['Int']>;
  readonly active?: Maybe<Scalars['Boolean']>;
  readonly attempted_landings?: Maybe<Scalars['Int']>;
  readonly class?: Maybe<Scalars['Int']>;
  readonly course_deg?: Maybe<Scalars['Int']>;
  readonly home_port?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly image?: Maybe<Scalars['String']>;
  readonly imo?: Maybe<Scalars['Int']>;
  readonly missions?: Maybe<ReadonlyArray<Maybe<ShipMission>>>;
  readonly mmsi?: Maybe<Scalars['Int']>;
  readonly model?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly position?: Maybe<ShipLocation>;
  readonly roles?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly speed_kn?: Maybe<Scalars['Float']>;
  readonly status?: Maybe<Scalars['String']>;
  readonly successful_landings?: Maybe<Scalars['Int']>;
  readonly type?: Maybe<Scalars['String']>;
  readonly url?: Maybe<Scalars['String']>;
  readonly weight_kg?: Maybe<Scalars['Int']>;
  readonly weight_lbs?: Maybe<Scalars['Int']>;
  readonly year_built?: Maybe<Scalars['Int']>;
}

export interface ShipMission {
  readonly __typename?: 'ShipMission';
  readonly flight?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
}

export interface ShipLocation {
  readonly __typename?: 'ShipLocation';
  readonly latitude?: Maybe<Scalars['Float']>;
  readonly longitude?: Maybe<Scalars['Float']>;
}

export interface HistoriesResult {
  readonly __typename?: 'HistoriesResult';
  readonly result?: Maybe<Result>;
  readonly data?: Maybe<ReadonlyArray<Maybe<History>>>;
}

export interface Result {
  readonly __typename?: 'Result';
  readonly totalCount?: Maybe<Scalars['Int']>;
}

export interface Landpad {
  readonly __typename?: 'Landpad';
  readonly attempted_landings?: Maybe<Scalars['String']>;
  readonly details?: Maybe<Scalars['String']>;
  readonly full_name?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly landing_type?: Maybe<Scalars['String']>;
  readonly location?: Maybe<Location>;
  readonly status?: Maybe<Scalars['String']>;
  readonly successful_landings?: Maybe<Scalars['String']>;
  readonly wikipedia?: Maybe<Scalars['String']>;
}

export interface Location {
  readonly __typename?: 'Location';
  readonly latitude?: Maybe<Scalars['Float']>;
  readonly longitude?: Maybe<Scalars['Float']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly region?: Maybe<Scalars['String']>;
  readonly pathname?: Maybe<Scalars['String']>;
  readonly search?: Maybe<Scalars['String']>;
  readonly origin?: Maybe<Scalars['String']>;
  readonly hash?: Maybe<Scalars['String']>;
  readonly host?: Maybe<Scalars['String']>;
  readonly hostname?: Maybe<Scalars['String']>;
  readonly href?: Maybe<Scalars['String']>;
  readonly port?: Maybe<Scalars['Int']>;
  readonly protocol?: Maybe<Scalars['String']>;
}

export interface LaunchFind {
  readonly apoapsis_km?: Maybe<Scalars['Float']>;
  readonly block?: Maybe<Scalars['Int']>;
  readonly cap_serial?: Maybe<Scalars['String']>;
  readonly capsule_reuse?: Maybe<Scalars['String']>;
  readonly core_flight?: Maybe<Scalars['Int']>;
  readonly core_reuse?: Maybe<Scalars['String']>;
  readonly core_serial?: Maybe<Scalars['String']>;
  readonly customer?: Maybe<Scalars['String']>;
  readonly eccentricity?: Maybe<Scalars['Float']>;
  readonly end?: Maybe<Scalars['Date']>;
  readonly epoch?: Maybe<Scalars['Date']>;
  readonly fairings_recovered?: Maybe<Scalars['String']>;
  readonly fairings_recovery_attempt?: Maybe<Scalars['String']>;
  readonly fairings_reuse?: Maybe<Scalars['String']>;
  readonly fairings_reused?: Maybe<Scalars['String']>;
  readonly fairings_ship?: Maybe<Scalars['String']>;
  readonly gridfins?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly inclination_deg?: Maybe<Scalars['Float']>;
  readonly land_success?: Maybe<Scalars['String']>;
  readonly landing_intent?: Maybe<Scalars['String']>;
  readonly landing_type?: Maybe<Scalars['String']>;
  readonly landing_vehicle?: Maybe<Scalars['String']>;
  readonly launch_date_local?: Maybe<Scalars['Date']>;
  readonly launch_date_utc?: Maybe<Scalars['Date']>;
  readonly launch_success?: Maybe<Scalars['String']>;
  readonly launch_year?: Maybe<Scalars['String']>;
  readonly legs?: Maybe<Scalars['String']>;
  readonly lifespan_years?: Maybe<Scalars['Float']>;
  readonly longitude?: Maybe<Scalars['Float']>;
  readonly manufacturer?: Maybe<Scalars['String']>;
  readonly mean_motion?: Maybe<Scalars['Float']>;
  readonly mission_id?: Maybe<Scalars['String']>;
  readonly mission_name?: Maybe<Scalars['String']>;
  readonly nationality?: Maybe<Scalars['String']>;
  readonly norad_id?: Maybe<Scalars['Int']>;
  readonly orbit?: Maybe<Scalars['String']>;
  readonly payload_id?: Maybe<Scalars['String']>;
  readonly payload_type?: Maybe<Scalars['String']>;
  readonly periapsis_km?: Maybe<Scalars['Float']>;
  readonly period_min?: Maybe<Scalars['Float']>;
  readonly raan?: Maybe<Scalars['Float']>;
  readonly reference_system?: Maybe<Scalars['String']>;
  readonly regime?: Maybe<Scalars['String']>;
  readonly reused?: Maybe<Scalars['String']>;
  readonly rocket_id?: Maybe<Scalars['String']>;
  readonly rocket_name?: Maybe<Scalars['String']>;
  readonly rocket_type?: Maybe<Scalars['String']>;
  readonly second_stage_block?: Maybe<Scalars['String']>;
  readonly semi_major_axis_km?: Maybe<Scalars['Float']>;
  readonly ship?: Maybe<Scalars['String']>;
  readonly side_core1_reuse?: Maybe<Scalars['String']>;
  readonly side_core2_reuse?: Maybe<Scalars['String']>;
  readonly site_id?: Maybe<Scalars['String']>;
  readonly site_name_long?: Maybe<Scalars['String']>;
  readonly site_name?: Maybe<Scalars['String']>;
  readonly start?: Maybe<Scalars['Date']>;
  readonly tbd?: Maybe<Scalars['String']>;
  readonly tentative_max_precision?: Maybe<Scalars['String']>;
  readonly tentative?: Maybe<Scalars['String']>;
}

export interface LaunchesPastResult {
  readonly __typename?: 'LaunchesPastResult';
  readonly result?: Maybe<Result>;
  readonly data?: Maybe<ReadonlyArray<Maybe<Launch>>>;
}

export interface Launchpad {
  readonly __typename?: 'Launchpad';
  readonly attempted_launches?: Maybe<Scalars['Int']>;
  readonly details?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly location?: Maybe<Location>;
  readonly name?: Maybe<Scalars['String']>;
  readonly status?: Maybe<Scalars['String']>;
  readonly successful_launches?: Maybe<Scalars['Int']>;
  readonly vehicles_launched?: Maybe<ReadonlyArray<Maybe<Rocket>>>;
  readonly wikipedia?: Maybe<Scalars['String']>;
}

export interface MissionsFind {
  readonly id?: Maybe<Scalars['ID']>;
  readonly manufacturer?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly payload_id?: Maybe<Scalars['String']>;
}

export interface Mission {
  readonly __typename?: 'Mission';
  readonly description?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly manufacturers?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly name?: Maybe<Scalars['String']>;
  readonly twitter?: Maybe<Scalars['String']>;
  readonly website?: Maybe<Scalars['String']>;
  readonly wikipedia?: Maybe<Scalars['String']>;
  readonly payloads?: Maybe<ReadonlyArray<Maybe<Payload>>>;
}

export interface MissionResult {
  readonly __typename?: 'MissionResult';
  readonly result?: Maybe<Result>;
  readonly data?: Maybe<ReadonlyArray<Maybe<Mission>>>;
}

export interface PayloadsFind {
  readonly apoapsis_km?: Maybe<Scalars['Float']>;
  readonly customer?: Maybe<Scalars['String']>;
  readonly eccentricity?: Maybe<Scalars['Float']>;
  readonly epoch?: Maybe<Scalars['Date']>;
  readonly inclination_deg?: Maybe<Scalars['Float']>;
  readonly lifespan_years?: Maybe<Scalars['Float']>;
  readonly longitude?: Maybe<Scalars['Float']>;
  readonly manufacturer?: Maybe<Scalars['String']>;
  readonly mean_motion?: Maybe<Scalars['Float']>;
  readonly nationality?: Maybe<Scalars['String']>;
  readonly norad_id?: Maybe<Scalars['Int']>;
  readonly orbit?: Maybe<Scalars['String']>;
  readonly payload_id?: Maybe<Scalars['ID']>;
  readonly payload_type?: Maybe<Scalars['String']>;
  readonly periapsis_km?: Maybe<Scalars['Float']>;
  readonly period_min?: Maybe<Scalars['Float']>;
  readonly raan?: Maybe<Scalars['Float']>;
  readonly reference_system?: Maybe<Scalars['String']>;
  readonly regime?: Maybe<Scalars['String']>;
  readonly reused?: Maybe<Scalars['Boolean']>;
  readonly semi_major_axis_km?: Maybe<Scalars['Float']>;
}

export interface Roadster {
  readonly __typename?: 'Roadster';
  readonly apoapsis_au?: Maybe<Scalars['Float']>;
  readonly details?: Maybe<Scalars['String']>;
  readonly earth_distance_km?: Maybe<Scalars['Float']>;
  readonly earth_distance_mi?: Maybe<Scalars['Float']>;
  readonly eccentricity?: Maybe<Scalars['Float']>;
  readonly epoch_jd?: Maybe<Scalars['Float']>;
  readonly inclination?: Maybe<Scalars['Float']>;
  readonly launch_date_unix?: Maybe<Scalars['Date']>;
  readonly launch_date_utc?: Maybe<Scalars['Date']>;
  readonly launch_mass_kg?: Maybe<Scalars['Int']>;
  readonly launch_mass_lbs?: Maybe<Scalars['Int']>;
  readonly longitude?: Maybe<Scalars['Float']>;
  readonly mars_distance_km?: Maybe<Scalars['Float']>;
  readonly mars_distance_mi?: Maybe<Scalars['Float']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly norad_id?: Maybe<Scalars['Int']>;
  readonly orbit_type?: Maybe<Scalars['Float']>;
  readonly periapsis_arg?: Maybe<Scalars['Float']>;
  readonly periapsis_au?: Maybe<Scalars['Float']>;
  readonly period_days?: Maybe<Scalars['Float']>;
  readonly semi_major_axis_au?: Maybe<Scalars['Float']>;
  readonly speed_kph?: Maybe<Scalars['Float']>;
  readonly speed_mph?: Maybe<Scalars['Float']>;
  readonly wikipedia?: Maybe<Scalars['String']>;
}

export interface RocketsResult {
  readonly __typename?: 'RocketsResult';
  readonly result?: Maybe<Result>;
  readonly data?: Maybe<ReadonlyArray<Maybe<Rocket>>>;
}

export interface ShipsFind {
  readonly id?: Maybe<Scalars['ID']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly model?: Maybe<Scalars['String']>;
  readonly type?: Maybe<Scalars['String']>;
  readonly role?: Maybe<Scalars['String']>;
  readonly active?: Maybe<Scalars['Boolean']>;
  readonly imo?: Maybe<Scalars['Int']>;
  readonly mmsi?: Maybe<Scalars['Int']>;
  readonly abs?: Maybe<Scalars['Int']>;
  readonly class?: Maybe<Scalars['Int']>;
  readonly weight_lbs?: Maybe<Scalars['Int']>;
  readonly weight_kg?: Maybe<Scalars['Int']>;
  readonly year_built?: Maybe<Scalars['Int']>;
  readonly home_port?: Maybe<Scalars['String']>;
  readonly status?: Maybe<Scalars['String']>;
  readonly speed_kn?: Maybe<Scalars['Int']>;
  readonly course_deg?: Maybe<Scalars['Int']>;
  readonly latitude?: Maybe<Scalars['Float']>;
  readonly longitude?: Maybe<Scalars['Float']>;
  readonly successful_landings?: Maybe<Scalars['Int']>;
  readonly attempted_landings?: Maybe<Scalars['Int']>;
  readonly mission?: Maybe<Scalars['String']>;
}

export interface ShipsResult {
  readonly __typename?: 'ShipsResult';
  readonly result?: Maybe<Result>;
  readonly data?: Maybe<ReadonlyArray<Maybe<Ship>>>;
}

export interface Mutation {
  readonly __typename?: 'Mutation';
  /** delete data from the table: "users" */
  readonly delete_users?: Maybe<users_mutation_response>;
  /** insert data into the table: "users" */
  readonly insert_users?: Maybe<users_mutation_response>;
  /** update data of the table: "users" */
  readonly update_users?: Maybe<users_mutation_response>;
}


export interface Mutationdelete_usersArgs {
  where: users_bool_exp;
}


export interface Mutationinsert_usersArgs {
  objects: ReadonlyArray<users_insert_input>;
  on_conflict?: Maybe<users_on_conflict>;
}


export interface Mutationupdate_usersArgs {
  _set?: Maybe<users_set_input>;
  where: users_bool_exp;
}

/** response of any mutation on the table "users" */
export interface users_mutation_response {
  readonly __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<users>;
}

/** input type for inserting data into table "users" */
export interface users_insert_input {
  readonly id?: Maybe<Scalars['uuid']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly rocket?: Maybe<Scalars['String']>;
  readonly timestamp?: Maybe<Scalars['timestamptz']>;
  readonly twitter?: Maybe<Scalars['String']>;
}

/** on conflict condition type for table "users" */
export interface users_on_conflict {
  readonly constraint: users_constraint;
  readonly update_columns: ReadonlyArray<users_update_column>;
}

/** unique or primary key constraints on table "users" */
export const enum users_constraint {
  /** unique or primary key constraint */
  users_pkey = 'users_pkey'
};

/** update columns of table "users" */
export const enum users_update_column {
  /** column name */
  id = 'id',
  /** column name */
  name = 'name',
  /** column name */
  rocket = 'rocket',
  /** column name */
  timestamp = 'timestamp',
  /** column name */
  twitter = 'twitter'
};

/** input type for updating data in table "users" */
export interface users_set_input {
  readonly id?: Maybe<Scalars['uuid']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly rocket?: Maybe<Scalars['String']>;
  readonly timestamp?: Maybe<Scalars['timestamptz']>;
  readonly twitter?: Maybe<Scalars['String']>;
}

export interface Subscription {
  readonly __typename?: 'Subscription';
  /** fetch data from the table: "users" */
  readonly users: ReadonlyArray<users>;
  /** fetch aggregated fields from the table: "users" */
  readonly users_aggregate: users_aggregate;
  /** fetch data from the table: "users" using primary key columns */
  readonly users_by_pk?: Maybe<users>;
}


export interface SubscriptionusersArgs {
  distinct_on?: Maybe<ReadonlyArray<users_select_column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<users_order_by>>;
  where?: Maybe<users_bool_exp>;
}


export interface Subscriptionusers_aggregateArgs {
  distinct_on?: Maybe<ReadonlyArray<users_select_column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<users_order_by>>;
  where?: Maybe<users_bool_exp>;
}


export interface Subscriptionusers_by_pkArgs {
  id: Scalars['uuid'];
}

/** conflict action */
export const enum conflict_action {
  /** ignore the insert on this row */
  ignore = 'ignore',
  /** update the row with the given values */
  update = 'update'
};

/** order by aggregate values of table "users" */
export interface users_aggregate_order_by {
  readonly count?: Maybe<order_by>;
  readonly max?: Maybe<users_max_order_by>;
  readonly min?: Maybe<users_min_order_by>;
}

/** order by max() on columns of table "users" */
export interface users_max_order_by {
  readonly name?: Maybe<order_by>;
  readonly rocket?: Maybe<order_by>;
  readonly timestamp?: Maybe<order_by>;
  readonly twitter?: Maybe<order_by>;
}

/** order by min() on columns of table "users" */
export interface users_min_order_by {
  readonly name?: Maybe<order_by>;
  readonly rocket?: Maybe<order_by>;
  readonly timestamp?: Maybe<order_by>;
  readonly twitter?: Maybe<order_by>;
}

/** input type for inserting array relation for remote table "users" */
export interface users_arr_rel_insert_input {
  readonly data: ReadonlyArray<users_insert_input>;
  readonly on_conflict?: Maybe<users_on_conflict>;
}

/** input type for inserting object relation for remote table "users" */
export interface users_obj_rel_insert_input {
  readonly data: users_insert_input;
  readonly on_conflict?: Maybe<users_on_conflict>;
}


export interface CoreMission {
  readonly __typename?: 'CoreMission';
  readonly name?: Maybe<Scalars['String']>;
  readonly flight?: Maybe<Scalars['Int']>;
}

export type AppQueryVariables = Exact<{ [key: string]: never; }>;


export type AppQueryData = (
  { readonly __typename?: 'Query' }
  & { readonly location?: Maybe<(
    { readonly __typename?: 'Location' }
    & Pick<Location, 'pathname'>
  )>, readonly launchLatest?: Maybe<(
    { readonly __typename?: 'Launch' }
    & { missionName: Launch['mission_name'] }
  )> }
);
