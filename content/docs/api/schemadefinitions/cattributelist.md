---
title: CAttributeList
---

# Interface CAttributeList

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAttributeList.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CAttributeList : ISchemaClass<CAttributeList>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CAttributeList>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Attributes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAttributeList.cs#L18)

```csharp
ref CUtlVector<CEconItemAttribute> Attributes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CEconItemAttribute](/docs/api/schemadefinitions/ceconitemattribute)>

### Manager

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAttributeList.cs#L20)

```csharp
CAttributeManager? Manager { get; }
```

#### Property Value

- [CAttributeManager](/docs/api/schemadefinitions/cattributemanager)?

## Methods

### AttributesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAttributeList.cs#L22)

```csharp
void AttributesUpdated()
```

### SetOrAddAttribute(string, float)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CAttributeList.cs#L8)

Sets or adds an attribute to the attribute list.

```csharp
void SetOrAddAttribute(string attributeName, float value)
```

#### Parameters

- **attributeName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [float](https://learn.microsoft.com/dotnet/api/system.single)

