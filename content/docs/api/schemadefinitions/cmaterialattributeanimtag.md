---
title: CMaterialAttributeAnimTag
---

# Interface CMaterialAttributeAnimTag

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMaterialAttributeAnimTag.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMaterialAttributeAnimTag : CAnimTagBase, ISchemaClass<CAnimTagBase>, ISchemaClass<CMaterialAttributeAnimTag>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CAnimTagBase](/docs/api/schemadefinitions/canimtagbase)
- [ISchemaClass<CAnimTagBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CMaterialAttributeAnimTag>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AttributeName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMaterialAttributeAnimTag.cs#L18)

```csharp
string AttributeName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### AttributeType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMaterialAttributeAnimTag.cs#L20)

```csharp
ref MatterialAttributeTagType_t AttributeType { get; }
```

#### Property Value

- [MatterialAttributeTagType_t](/docs/api/schemadefinitions/matterialattributetagtype_t)

### Color

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMaterialAttributeAnimTag.cs#L24)

```csharp
ref Color Color { get; }
```

#### Property Value

- [Color](/docs/api/natives/color)

### Value

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMaterialAttributeAnimTag.cs#L22)

```csharp
ref float Value { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

