---
title: CMaterialAttributeAnimTag
---

```csharp
public interface CMaterialAttributeAnimTag : CAnimTagBase, ISchemaClass<CAnimTagBase>, ISchemaClass<CMaterialAttributeAnimTag>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **AttributeName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMaterialAttributeAnimTag.cs#L16)

```csharp
string AttributeName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **AttributeType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMaterialAttributeAnimTag.cs#L18)

```csharp
ref MatterialAttributeTagType_t AttributeType { get; }
```

#### Property Value

- [MatterialAttributeTagType_t](/docs/api/shared/schemadefinitions/matterialattributetagtype_t)

### **Color** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMaterialAttributeAnimTag.cs#L22)

```csharp
ref Color Color { get; }
```

#### Property Value

- [Color](/docs/api/shared/natives/color)

### **Value** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMaterialAttributeAnimTag.cs#L20)

```csharp
ref float Value { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

