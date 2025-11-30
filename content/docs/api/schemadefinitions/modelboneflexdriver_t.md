---
title: ModelBoneFlexDriver_t
---

# Interface ModelBoneFlexDriver_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelBoneFlexDriver_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface ModelBoneFlexDriver_t : ISchemaClass<ModelBoneFlexDriver_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<ModelBoneFlexDriver_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BoneName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelBoneFlexDriver_t.cs#L18)

```csharp
string BoneName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### BoneNameToken

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelBoneFlexDriver_t.cs#L20)

```csharp
ref uint BoneNameToken { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Controls

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelBoneFlexDriver_t.cs#L22)

```csharp
ref CUtlVector<ModelBoneFlexDriverControl_t> Controls { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[ModelBoneFlexDriverControl_t](/docs/api/schemadefinitions/modelboneflexdrivercontrol_t)>

