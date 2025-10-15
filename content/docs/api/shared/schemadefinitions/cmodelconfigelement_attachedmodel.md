---
title: CModelConfigElement_AttachedModel
---

```csharp
public interface CModelConfigElement_AttachedModel : CModelConfigElement, ISchemaClass<CModelConfigElement>, ISchemaClass<CModelConfigElement_AttachedModel>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AcceptParentMaterialDrivenDecals

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfigElement_AttachedModel.cs#L39)

```csharp
ref bool AcceptParentMaterialDrivenDecals { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AngOffset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfigElement_AttachedModel.cs#L25)

```csharp
ref QAngle AngOffset { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### AttachmentName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfigElement_AttachedModel.cs#L27)

```csharp
string AttachmentName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### AttachmentType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfigElement_AttachedModel.cs#L31)

```csharp
ref ModelConfigAttachmentType_t AttachmentType { get; }
```

#### Property Value

- [ModelConfigAttachmentType_t](/docs/api/shared/schemadefinitions/modelconfigattachmenttype_t)

### BodygroupOnOtherModels

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfigElement_AttachedModel.cs#L41)

```csharp
string BodygroupOnOtherModels { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### BoneMergeFlex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfigElement_AttachedModel.cs#L33)

```csharp
ref bool BoneMergeFlex { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EntityClass

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfigElement_AttachedModel.cs#L19)

```csharp
string EntityClass { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### InstanceName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfigElement_AttachedModel.cs#L17)

```csharp
string InstanceName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### LocalAttachmentOffsetName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfigElement_AttachedModel.cs#L29)

```csharp
string LocalAttachmentOffsetName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### MaterialGroupOnOtherModels

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfigElement_AttachedModel.cs#L43)

```csharp
string MaterialGroupOnOtherModels { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Model

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfigElement_AttachedModel.cs#L21)

```csharp
ref CStrongHandle<InfoForResourceTypeCModel> Model { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCModel](/docs/api/shared/schemadefinitions/infoforresourcetypecmodel)>

### Offset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfigElement_AttachedModel.cs#L23)

```csharp
ref Vector Offset { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### UserSpecifiedColor

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfigElement_AttachedModel.cs#L35)

```csharp
ref bool UserSpecifiedColor { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UserSpecifiedMaterialGroup

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfigElement_AttachedModel.cs#L37)

```csharp
ref bool UserSpecifiedMaterialGroup { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

