---
title: lerpdata_t
---

```csharp
public interface lerpdata_t : ISchemaClass<lerpdata_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**Ent** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/lerpdata_t.cs#L16)

```csharp
ref CHandle<CBaseEntity> Ent { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

**FXIndex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/lerpdata_t.cs#L26)

```csharp
ParticleIndex_t FXIndex { get; }
```

#### Property Value

- [ParticleIndex_t](/docs/api/shared/schemadefinitions/particleindex_t)

**MoveType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/lerpdata_t.cs#L18)

```csharp
ref MoveType_t MoveType { get; }
```

#### Property Value

- [MoveType_t](/docs/api/shared/schemadefinitions/movetype_t)

**StartOrigin** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/lerpdata_t.cs#L22)

```csharp
ref Vector StartOrigin { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**StartRot** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/lerpdata_t.cs#L24)

```csharp
ref Quaternion StartRot { get; }
```

#### Property Value

- [Quaternion](/docs/api/shared/natives/quaternion)

**StartTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/lerpdata_t.cs#L20)

```csharp
GameTime_t StartTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

