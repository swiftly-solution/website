---
title: CCSPlayerController_ActionTrackingServices
---

```csharp
public interface CCSPlayerController_ActionTrackingServices : CPlayerControllerComponent, ISchemaClass<CPlayerControllerComponent>, ISchemaClass<CCSPlayerController_ActionTrackingServices>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **MatchStats** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_ActionTrackingServices.cs#L19)

```csharp
CSMatchStats_t MatchStats { get; }
```

- Property Value

- [CSMatchStats_t](/docs/api/shared/schemadefinitions/csmatchstats_t)

### **NumRoundKills** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_ActionTrackingServices.cs#L21)

```csharp
ref int NumRoundKills { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **NumRoundKillsHeadshots** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_ActionTrackingServices.cs#L23)

```csharp
ref int NumRoundKillsHeadshots { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **PerRoundStats** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_ActionTrackingServices.cs#L17)

```csharp
ref CUtlVector PerRoundStats { get; }
```

- Property Value

- [CUtlVector](/docs/api/)

### **TotalRoundDamageDealt** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_ActionTrackingServices.cs#L25)

```csharp
ref float TotalRoundDamageDealt { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### **MatchStatsUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_ActionTrackingServices.cs#L28)

```csharp
void MatchStatsUpdated()
```

### **NumRoundKillsHeadshotsUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_ActionTrackingServices.cs#L30)

```csharp
void NumRoundKillsHeadshotsUpdated()
```

### **NumRoundKillsUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_ActionTrackingServices.cs#L29)

```csharp
void NumRoundKillsUpdated()
```

### **PerRoundStatsUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_ActionTrackingServices.cs#L27)

```csharp
void PerRoundStatsUpdated()
```

### **TotalRoundDamageDealtUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerController_ActionTrackingServices.cs#L31)

```csharp
void TotalRoundDamageDealtUpdated()
```

