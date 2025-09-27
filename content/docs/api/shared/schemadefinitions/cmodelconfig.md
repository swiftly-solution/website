---
title: CModelConfig
---

```csharp
public interface CModelConfig : ISchemaClass<CModelConfig>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**ActiveInEditorByDefault** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfig.cs#L22)

```csharp
ref bool ActiveInEditorByDefault { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**ConfigName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfig.cs#L16)

```csharp
ref CUtlString ConfigName { get; }
```

#### Property Value

- [CUtlString](/docs/api/shared/natives/cutlstring)

**Elements** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfig.cs#L18)

```csharp
ref CUtlVector<PointerTo<CModelConfigElement>> Elements { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[CModelConfigElement](/docs/api/shared/schemadefinitions/cmodelconfigelement)>>

**TopLevel** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CModelConfig.cs#L20)

```csharp
ref bool TopLevel { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

