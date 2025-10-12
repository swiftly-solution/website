---
title: CModelConfigList
---

```csharp
public interface CModelConfigList : ISchemaClass<CModelConfigList>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Configs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfigList.cs#L20)

```csharp
ref CUtlVector<PointerTo<CModelConfig>> Configs { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[CModelConfig](/docs/api/shared/schemadefinitions/cmodelconfig)>>

### HideMaterialGroupInTools

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfigList.cs#L16)

```csharp
ref bool HideMaterialGroupInTools { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HideRenderColorInTools

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfigList.cs#L18)

```csharp
ref bool HideRenderColorInTools { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

