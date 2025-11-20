---
title: CCSPlayerResource
---

```csharp
public interface CCSPlayerResource : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CCSPlayerResource>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BombsiteCenterA

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L24)

```csharp
ref Vector BombsiteCenterA { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### BombsiteCenterB

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L26)

```csharp
ref Vector BombsiteCenterB { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### EndMatchNextMapAllVoted

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L34)

```csharp
ref bool EndMatchNextMapAllVoted { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FoundGoalPositions

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L36)

```csharp
ref bool FoundGoalPositions { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HostageAlive

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L18)

```csharp
ISchemaFixedArray<bool> HostageAlive { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)>

### HostageEntityIDs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L22)

```csharp
ISchemaFixedArray<uint> HostageEntityIDs { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### HostageRescueX

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L28)

```csharp
ISchemaFixedArray<int> HostageRescueX { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### HostageRescueY

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L30)

```csharp
ISchemaFixedArray<int> HostageRescueY { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### HostageRescueZ

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L32)

```csharp
ISchemaFixedArray<int> HostageRescueZ { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### IsHostageFollowingSomeone

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L20)

```csharp
ISchemaFixedArray<bool> IsHostageFollowingSomeone { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)>

## Methods

### BombsiteCenterAUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L41)

```csharp
void BombsiteCenterAUpdated()
```

### BombsiteCenterBUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L42)

```csharp
void BombsiteCenterBUpdated()
```

### EndMatchNextMapAllVotedUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L46)

```csharp
void EndMatchNextMapAllVotedUpdated()
```

### HostageAliveUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L38)

```csharp
void HostageAliveUpdated()
```

### HostageEntityIDsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L40)

```csharp
void HostageEntityIDsUpdated()
```

### HostageRescueXUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L43)

```csharp
void HostageRescueXUpdated()
```

### HostageRescueYUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L44)

```csharp
void HostageRescueYUpdated()
```

### HostageRescueZUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L45)

```csharp
void HostageRescueZUpdated()
```

### IsHostageFollowingSomeoneUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L39)

```csharp
void IsHostageFollowingSomeoneUpdated()
```

