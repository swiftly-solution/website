---
title: CMorphSetData
---

```csharp
public interface CMorphSetData : ISchemaClass<CMorphSetData>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BundleTypes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMorphSetData.cs#L22)

```csharp
ref CUtlVector<MorphBundleType_t> BundleTypes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[MorphBundleType_t](/docs/api/shared/schemadefinitions/morphbundletype_t)>

### FlexControllers

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMorphSetData.cs#L30)

```csharp
ref CUtlVector<CFlexController> FlexControllers { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CFlexController](/docs/api/shared/schemadefinitions/cflexcontroller)>

### FlexDesc

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMorphSetData.cs#L28)

```csharp
ref CUtlVector<CFlexDesc> FlexDesc { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CFlexDesc](/docs/api/shared/schemadefinitions/cflexdesc)>

### FlexRules

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMorphSetData.cs#L32)

```csharp
ref CUtlVector<CFlexRule> FlexRules { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CFlexRule](/docs/api/shared/schemadefinitions/cflexrule)>

### Height

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMorphSetData.cs#L20)

```csharp
ref int Height { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MorphDatas

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMorphSetData.cs#L24)

```csharp
ref CUtlVector<CMorphData> MorphDatas { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CMorphData](/docs/api/shared/schemadefinitions/cmorphdata)>

### TextureAtlas

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMorphSetData.cs#L26)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> TextureAtlas { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCTextureBase](/docs/api/shared/schemadefinitions/infoforresourcetypectexturebase)>

### Width

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMorphSetData.cs#L18)

```csharp
ref int Width { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

