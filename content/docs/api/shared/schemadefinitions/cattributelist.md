---
title: CAttributeList
---

```csharp
public interface CAttributeList : ISchemaClass<CAttributeList>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Attributes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAttributeList.cs#L18)

```csharp
ref CUtlVector<CEconItemAttribute> Attributes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CEconItemAttribute](/docs/api/shared/schemadefinitions/ceconitemattribute)>

### Manager

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAttributeList.cs#L20)

```csharp
CAttributeManager? Manager { get; }
```

#### Property Value

- [CAttributeManager](/docs/api/shared/schemadefinitions/cattributemanager)?

## Methods

### AttributesUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAttributeList.cs#L22)

```csharp
void AttributesUpdated()
```

### SetOrAddAttribute(string, float)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CAttributeList.cs#L8)

```csharp
void SetOrAddAttribute(string attributeName, float value)
```

#### Parameters

- **attributeName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [float](https://learn.microsoft.com/dotnet/api/system.single)

