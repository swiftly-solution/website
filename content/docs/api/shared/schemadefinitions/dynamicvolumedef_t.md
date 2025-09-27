---
title: DynamicVolumeDef_t
---

```csharp
public interface DynamicVolumeDef_t : ISchemaClass<DynamicVolumeDef_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**AreaDst** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/DynamicVolumeDef_t.cs#L28)

```csharp
ref uint AreaDst { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**AreaSrc** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/DynamicVolumeDef_t.cs#L26)

```csharp
ref uint AreaSrc { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**Attached** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/DynamicVolumeDef_t.cs#L30)

```csharp
ref bool Attached { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**HullIdx** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/DynamicVolumeDef_t.cs#L20)

```csharp
ref int HullIdx { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**Source** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/DynamicVolumeDef_t.cs#L16)

```csharp
ref CHandle<CBaseEntity> Source { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

**SourceAnchorPos** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/DynamicVolumeDef_t.cs#L22)

```csharp
ref Vector SourceAnchorPos { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**Target** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/DynamicVolumeDef_t.cs#L18)

```csharp
ref CHandle<CBaseEntity> Target { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

**TargetAnchorPos** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/DynamicVolumeDef_t.cs#L24)

```csharp
ref Vector TargetAnchorPos { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

