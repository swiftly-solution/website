---
title: CModelConfigList
---

# Interface CModelConfigList

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfigList.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CModelConfigList : ISchemaClass<CModelConfigList>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CModelConfigList>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Configs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfigList.cs#L22)

```csharp
ref CUtlVector<PointerTo<CModelConfig>> Configs { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[PointerTo](/docs/api/natives/pointertot)<[CModelConfig](/docs/api/schemadefinitions/cmodelconfig)>>

### HideMaterialGroupInTools

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfigList.cs#L18)

```csharp
ref bool HideMaterialGroupInTools { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HideRenderColorInTools

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfigList.cs#L20)

```csharp
ref bool HideRenderColorInTools { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

