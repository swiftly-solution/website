---
title: CCSPlayerResource
---

```csharp
public interface CCSPlayerResource : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CCSPlayerResource>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BombsiteCenterA

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L23)

```csharp
ref Vector BombsiteCenterA { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### BombsiteCenterB

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L25)

```csharp
ref Vector BombsiteCenterB { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### EndMatchNextMapAllVoted

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L33)

```csharp
ref bool EndMatchNextMapAllVoted { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FoundGoalPositions

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L35)

```csharp
ref bool FoundGoalPositions { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HostageAlive

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L17)

```csharp
ISchemaFixedArray<bool> HostageAlive { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)>

### HostageEntityIDs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L21)

```csharp
ISchemaFixedArray<uint> HostageEntityIDs { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### HostageRescueX

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L27)

```csharp
ISchemaFixedArray<int> HostageRescueX { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### HostageRescueY

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L29)

```csharp
ISchemaFixedArray<int> HostageRescueY { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### HostageRescueZ

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L31)

```csharp
ISchemaFixedArray<int> HostageRescueZ { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### IsHostageFollowingSomeone

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L19)

```csharp
ISchemaFixedArray<bool> IsHostageFollowingSomeone { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)>

## Methods

### BombsiteCenterAUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L40)

```csharp
void BombsiteCenterAUpdated()
```

### BombsiteCenterBUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L41)

```csharp
void BombsiteCenterBUpdated()
```

### EndMatchNextMapAllVotedUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L45)

```csharp
void EndMatchNextMapAllVotedUpdated()
```

### HostageAliveUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L37)

```csharp
void HostageAliveUpdated()
```

### HostageEntityIDsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L39)

```csharp
void HostageEntityIDsUpdated()
```

### HostageRescueXUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L42)

```csharp
void HostageRescueXUpdated()
```

### HostageRescueYUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L43)

```csharp
void HostageRescueYUpdated()
```

### HostageRescueZUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L44)

```csharp
void HostageRescueZUpdated()
```

### IsHostageFollowingSomeoneUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerResource.cs#L38)

```csharp
void IsHostageFollowingSomeoneUpdated()
```

