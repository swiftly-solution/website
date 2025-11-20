---
title: ModelBoneFlexDriver_t
---

```csharp
public interface ModelBoneFlexDriver_t : ISchemaClass<ModelBoneFlexDriver_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BoneName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelBoneFlexDriver_t.cs#L18)

```csharp
string BoneName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### BoneNameToken

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelBoneFlexDriver_t.cs#L20)

```csharp
ref uint BoneNameToken { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Controls

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelBoneFlexDriver_t.cs#L22)

```csharp
ref CUtlVector<ModelBoneFlexDriverControl_t> Controls { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ModelBoneFlexDriverControl_t](/docs/api/shared/schemadefinitions/modelboneflexdrivercontrol_t)>

