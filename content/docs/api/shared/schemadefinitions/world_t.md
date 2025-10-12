---
title: World_t
---

```csharp
public interface World_t : ISchemaClass<World_t>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **BuilderParams** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/World_t.cs#L16)

```csharp
WorldBuilderParams_t BuilderParams { get; }
```

- Property Value

- [WorldBuilderParams_t](/docs/api/shared/schemadefinitions/worldbuilderparams_t)

### **EntityLumps** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/World_t.cs#L23)

```csharp
ref CUtlVector<CStrongHandle<InfoForResourceTypeCEntityLump>> EntityLumps { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCEntityLump](/docs/api/shared/schemadefinitions/infoforresourcetypecentitylump)>>

### **WorldLightingInfo** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/World_t.cs#L21)

```csharp
BakedLightingInfo_t WorldLightingInfo { get; }
```

- Property Value

- [BakedLightingInfo_t](/docs/api/shared/schemadefinitions/bakedlightinginfo_t)

### **WorldNodes** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/World_t.cs#L19)

```csharp
ref CUtlVector WorldNodes { get; }
```

- Property Value

- [CUtlVector](/docs/api/)

