---
title: MaterialGroup_t
---

```csharp
public interface MaterialGroup_t : ISchemaClass<MaterialGroup_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Materials

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MaterialGroup_t.cs#L20)

```csharp
ref CUtlVector<CStrongHandle<InfoForResourceTypeIMaterial2>> Materials { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeIMaterial2](/docs/api/shared/schemadefinitions/infoforresourcetypeimaterial2)>>

### Name

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MaterialGroup_t.cs#L18)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

