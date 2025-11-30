---
title: CModelConfigElement_AttachedModel
---

# Interface CModelConfigElement_AttachedModel

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfigElement_AttachedModel.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CModelConfigElement_AttachedModel : CModelConfigElement, ISchemaClass<CModelConfigElement>, ISchemaClass<CModelConfigElement_AttachedModel>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CModelConfigElement](/docs/api/schemadefinitions/cmodelconfigelement)
- [ISchemaClass<CModelConfigElement>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CModelConfigElement_AttachedModel>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AcceptParentMaterialDrivenDecals

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfigElement_AttachedModel.cs#L40)

```csharp
ref bool AcceptParentMaterialDrivenDecals { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AngOffset

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfigElement_AttachedModel.cs#L26)

```csharp
ref QAngle AngOffset { get; }
```

#### Property Value

- [QAngle](/docs/api/natives/qangle)

### AttachmentName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfigElement_AttachedModel.cs#L28)

```csharp
string AttachmentName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### AttachmentType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfigElement_AttachedModel.cs#L32)

```csharp
ref ModelConfigAttachmentType_t AttachmentType { get; }
```

#### Property Value

- [ModelConfigAttachmentType_t](/docs/api/schemadefinitions/modelconfigattachmenttype_t)

### BodygroupOnOtherModels

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfigElement_AttachedModel.cs#L42)

```csharp
string BodygroupOnOtherModels { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### BoneMergeFlex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfigElement_AttachedModel.cs#L34)

```csharp
ref bool BoneMergeFlex { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EntityClass

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfigElement_AttachedModel.cs#L20)

```csharp
string EntityClass { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### InstanceName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfigElement_AttachedModel.cs#L18)

```csharp
string InstanceName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### LocalAttachmentOffsetName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfigElement_AttachedModel.cs#L30)

```csharp
string LocalAttachmentOffsetName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### MaterialGroupOnOtherModels

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfigElement_AttachedModel.cs#L44)

```csharp
string MaterialGroupOnOtherModels { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Model

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfigElement_AttachedModel.cs#L22)

```csharp
ref CStrongHandle<InfoForResourceTypeCModel> Model { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCModel](/docs/api/schemadefinitions/infoforresourcetypecmodel)>

### Offset

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfigElement_AttachedModel.cs#L24)

```csharp
ref Vector Offset { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### UserSpecifiedColor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfigElement_AttachedModel.cs#L36)

```csharp
ref bool UserSpecifiedColor { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UserSpecifiedMaterialGroup

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfigElement_AttachedModel.cs#L38)

```csharp
ref bool UserSpecifiedMaterialGroup { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

