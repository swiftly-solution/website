---
title: ParticleNode_t
---

```csharp
public interface ParticleNode_t : ISchemaClass<ParticleNode_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### EndcapTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticleNode_t.cs#L28)

```csharp
ref float EndcapTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Entity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticleNode_t.cs#L18)

```csharp
ref CHandle<CBaseEntity> Entity { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### GrowthDuration

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticleNode_t.cs#L24)

```csharp
ref float GrowthDuration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### GrowthOrigin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticleNode_t.cs#L26)

```csharp
ref Vector GrowthOrigin { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### Index

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticleNode_t.cs#L20)

```csharp
ParticleIndex_t Index { get; }
```

#### Property Value

- [ParticleIndex_t](/docs/api/shared/schemadefinitions/particleindex_t)

### MarkedForDelete

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticleNode_t.cs#L30)

```csharp
ref bool MarkedForDelete { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StartTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticleNode_t.cs#L22)

```csharp
GameTime_t StartTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

