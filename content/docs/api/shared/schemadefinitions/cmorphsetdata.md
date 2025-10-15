---
title: CMorphSetData
---

```csharp
public interface CMorphSetData : ISchemaClass<CMorphSetData>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BundleTypes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMorphSetData.cs#L21)

```csharp
ref CUtlVector<MorphBundleType_t> BundleTypes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[MorphBundleType_t](/docs/api/shared/schemadefinitions/morphbundletype_t)>

### FlexControllers

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMorphSetData.cs#L29)

```csharp
ref CUtlVector<CFlexController> FlexControllers { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CFlexController](/docs/api/shared/schemadefinitions/cflexcontroller)>

### FlexDesc

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMorphSetData.cs#L27)

```csharp
ref CUtlVector<CFlexDesc> FlexDesc { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CFlexDesc](/docs/api/shared/schemadefinitions/cflexdesc)>

### FlexRules

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMorphSetData.cs#L31)

```csharp
ref CUtlVector<CFlexRule> FlexRules { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CFlexRule](/docs/api/shared/schemadefinitions/cflexrule)>

### Height

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMorphSetData.cs#L19)

```csharp
ref int Height { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MorphDatas

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMorphSetData.cs#L23)

```csharp
ref CUtlVector<CMorphData> MorphDatas { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CMorphData](/docs/api/shared/schemadefinitions/cmorphdata)>

### TextureAtlas

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMorphSetData.cs#L25)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> TextureAtlas { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCTextureBase](/docs/api/shared/schemadefinitions/infoforresourcetypectexturebase)>

### Width

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMorphSetData.cs#L17)

```csharp
ref int Width { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

