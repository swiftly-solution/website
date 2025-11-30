---
title: CCSPlayerController_ActionTrackingServices
---

# Interface CCSPlayerController_ActionTrackingServices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_ActionTrackingServices.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCSPlayerController_ActionTrackingServices : CPlayerControllerComponent, ISchemaClass<CPlayerControllerComponent>, ISchemaClass<CCSPlayerController_ActionTrackingServices>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CPlayerControllerComponent](/docs/api/schemadefinitions/cplayercontrollercomponent)
- [ISchemaClass<CPlayerControllerComponent>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CCSPlayerController_ActionTrackingServices>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### MatchStats

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_ActionTrackingServices.cs#L20)

```csharp
CSMatchStats_t MatchStats { get; }
```

#### Property Value

- [CSMatchStats_t](/docs/api/schemadefinitions/csmatchstats_t)

### NumRoundKills

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_ActionTrackingServices.cs#L22)

```csharp
ref int NumRoundKills { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumRoundKillsHeadshots

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_ActionTrackingServices.cs#L24)

```csharp
ref int NumRoundKillsHeadshots { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PerRoundStats

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_ActionTrackingServices.cs#L18)

```csharp
ref CUtlVector<CSPerRoundStats_t> PerRoundStats { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CSPerRoundStats_t](/docs/api/schemadefinitions/csperroundstats_t)>

### TotalRoundDamageDealt

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_ActionTrackingServices.cs#L26)

```csharp
ref float TotalRoundDamageDealt { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### MatchStatsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_ActionTrackingServices.cs#L29)

```csharp
void MatchStatsUpdated()
```

### NumRoundKillsHeadshotsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_ActionTrackingServices.cs#L31)

```csharp
void NumRoundKillsHeadshotsUpdated()
```

### NumRoundKillsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_ActionTrackingServices.cs#L30)

```csharp
void NumRoundKillsUpdated()
```

### PerRoundStatsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_ActionTrackingServices.cs#L28)

```csharp
void PerRoundStatsUpdated()
```

### TotalRoundDamageDealtUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_ActionTrackingServices.cs#L32)

```csharp
void TotalRoundDamageDealtUpdated()
```

