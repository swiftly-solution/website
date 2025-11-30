---
title: World_t
---

# Interface World_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/World_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface World_t : ISchemaClass<World_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<World_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BuilderParams

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/World_t.cs#L18)

```csharp
WorldBuilderParams_t BuilderParams { get; }
```

#### Property Value

- [WorldBuilderParams_t](/docs/api/schemadefinitions/worldbuilderparams_t)

### EntityLumps

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/World_t.cs#L24)

```csharp
ref CUtlVector<CStrongHandle<InfoForResourceTypeCEntityLump>> EntityLumps { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCEntityLump](/docs/api/schemadefinitions/infoforresourcetypecentitylump)>>

### WorldLightingInfo

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/World_t.cs#L22)

```csharp
BakedLightingInfo_t WorldLightingInfo { get; }
```

#### Property Value

- [BakedLightingInfo_t](/docs/api/schemadefinitions/bakedlightinginfo_t)

### WorldNodes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/World_t.cs#L20)

```csharp
ref CUtlVector<NodeData_t> WorldNodes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[NodeData_t](/docs/api/schemadefinitions/nodedata_t)>

