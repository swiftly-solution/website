---
title: CAttributeList
---

```csharp
public interface CAttributeList : ISchemaClass<CAttributeList>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Attributes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAttributeList.cs#L17)

```csharp
ref CUtlVector<CEconItemAttribute> Attributes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CEconItemAttribute](/docs/api/shared/schemadefinitions/ceconitemattribute)>

### Manager

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAttributeList.cs#L19)

```csharp
CAttributeManager? Manager { get; }
```

#### Property Value

- [CAttributeManager](/docs/api/shared/schemadefinitions/cattributemanager)?

## Methods

### AttributesUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAttributeList.cs#L21)

```csharp
void AttributesUpdated()
```

