---
title: CModelConfigElement
---

```csharp
public interface CModelConfigElement : ISchemaClass<CModelConfigElement>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **ElementName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfigElement.cs#L16)

```csharp
string ElementName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **NestedElements** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfigElement.cs#L18)

```csharp
ref CUtlVector<PointerTo<CModelConfigElement>> NestedElements { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[CModelConfigElement](/docs/api/shared/schemadefinitions/cmodelconfigelement)>>

