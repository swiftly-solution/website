---
title: CCSPlayerResource
---

# Interface CCSPlayerResource

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCSPlayerResource : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CCSPlayerResource>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CCSPlayerResource>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BombsiteCenterA

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L24)

```csharp
ref Vector BombsiteCenterA { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### BombsiteCenterB

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L26)

```csharp
ref Vector BombsiteCenterB { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### EndMatchNextMapAllVoted

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L34)

```csharp
ref bool EndMatchNextMapAllVoted { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FoundGoalPositions

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L36)

```csharp
ref bool FoundGoalPositions { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HostageAlive

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L18)

```csharp
ISchemaFixedArray<bool> HostageAlive { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)>

### HostageEntityIDs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L22)

```csharp
ISchemaFixedArray<uint> HostageEntityIDs { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### HostageRescueX

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L28)

```csharp
ISchemaFixedArray<int> HostageRescueX { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### HostageRescueY

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L30)

```csharp
ISchemaFixedArray<int> HostageRescueY { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### HostageRescueZ

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L32)

```csharp
ISchemaFixedArray<int> HostageRescueZ { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### IsHostageFollowingSomeone

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L20)

```csharp
ISchemaFixedArray<bool> IsHostageFollowingSomeone { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)>

## Methods

### BombsiteCenterAUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L41)

```csharp
void BombsiteCenterAUpdated()
```

### BombsiteCenterBUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L42)

```csharp
void BombsiteCenterBUpdated()
```

### EndMatchNextMapAllVotedUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L46)

```csharp
void EndMatchNextMapAllVotedUpdated()
```

### HostageAliveUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L38)

```csharp
void HostageAliveUpdated()
```

### HostageEntityIDsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L40)

```csharp
void HostageEntityIDsUpdated()
```

### HostageRescueXUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L43)

```csharp
void HostageRescueXUpdated()
```

### HostageRescueYUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L44)

```csharp
void HostageRescueYUpdated()
```

### HostageRescueZUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L45)

```csharp
void HostageRescueZUpdated()
```

### IsHostageFollowingSomeoneUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L39)

```csharp
void IsHostageFollowingSomeoneUpdated()
```

