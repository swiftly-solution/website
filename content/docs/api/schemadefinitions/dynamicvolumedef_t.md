---
title: DynamicVolumeDef_t
---

# Interface DynamicVolumeDef_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/DynamicVolumeDef_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface DynamicVolumeDef_t : ISchemaClass<DynamicVolumeDef_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<DynamicVolumeDef_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AreaDst

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/DynamicVolumeDef_t.cs#L30)

```csharp
ref uint AreaDst { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### AreaSrc

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/DynamicVolumeDef_t.cs#L28)

```csharp
ref uint AreaSrc { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Attached

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/DynamicVolumeDef_t.cs#L32)

```csharp
ref bool Attached { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HullIdx

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/DynamicVolumeDef_t.cs#L22)

```csharp
ref int HullIdx { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Source

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/DynamicVolumeDef_t.cs#L18)

```csharp
ref CHandle<CBaseEntity> Source { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBaseEntity](/docs/api/schemadefinitions/cbaseentity)>

### SourceAnchorPos

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/DynamicVolumeDef_t.cs#L24)

```csharp
ref Vector SourceAnchorPos { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### Target

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/DynamicVolumeDef_t.cs#L20)

```csharp
ref CHandle<CBaseEntity> Target { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBaseEntity](/docs/api/schemadefinitions/cbaseentity)>

### TargetAnchorPos

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/DynamicVolumeDef_t.cs#L26)

```csharp
ref Vector TargetAnchorPos { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

