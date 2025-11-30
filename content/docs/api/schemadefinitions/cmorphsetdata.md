---
title: CMorphSetData
---

# Interface CMorphSetData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMorphSetData.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMorphSetData : ISchemaClass<CMorphSetData>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CMorphSetData>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BundleTypes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMorphSetData.cs#L22)

```csharp
ref CUtlVector<MorphBundleType_t> BundleTypes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[MorphBundleType_t](/docs/api/schemadefinitions/morphbundletype_t)>

### FlexControllers

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMorphSetData.cs#L30)

```csharp
ref CUtlVector<CFlexController> FlexControllers { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CFlexController](/docs/api/schemadefinitions/cflexcontroller)>

### FlexDesc

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMorphSetData.cs#L28)

```csharp
ref CUtlVector<CFlexDesc> FlexDesc { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CFlexDesc](/docs/api/schemadefinitions/cflexdesc)>

### FlexRules

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMorphSetData.cs#L32)

```csharp
ref CUtlVector<CFlexRule> FlexRules { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CFlexRule](/docs/api/schemadefinitions/cflexrule)>

### Height

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMorphSetData.cs#L20)

```csharp
ref int Height { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MorphDatas

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMorphSetData.cs#L24)

```csharp
ref CUtlVector<CMorphData> MorphDatas { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CMorphData](/docs/api/schemadefinitions/cmorphdata)>

### TextureAtlas

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMorphSetData.cs#L26)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> TextureAtlas { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCTextureBase](/docs/api/schemadefinitions/infoforresourcetypectexturebase)>

### Width

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMorphSetData.cs#L18)

```csharp
ref int Width { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

