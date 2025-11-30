---
title: CAttributeManager
---

# Interface CAttributeManager

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAttributeManager.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CAttributeManager : ISchemaClass<CAttributeManager>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CAttributeManager>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### CachedResults

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAttributeManager.cs#L28)

```csharp
ref CUtlVector<CAttributeManager__cached_attribute_float_t> CachedResults { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CAttributeManager__cached_attribute_float_t](/docs/api/schemadefinitions/cattributemanager__cached_attribute_float_t)>

### Outer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAttributeManager.cs#L22)

```csharp
ref CHandle<CBaseEntity> Outer { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBaseEntity](/docs/api/schemadefinitions/cbaseentity)>

### PreventLoopback

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAttributeManager.cs#L24)

```csharp
ref bool PreventLoopback { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ProviderType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAttributeManager.cs#L26)

```csharp
ref attributeprovidertypes_t ProviderType { get; }
```

#### Property Value

- [attributeprovidertypes_t](/docs/api/schemadefinitions/attributeprovidertypes_t)

### Providers

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAttributeManager.cs#L18)

```csharp
ref CUtlVector<CHandle<CBaseEntity>> Providers { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CHandle](/docs/api/natives/chandlet)<[CBaseEntity](/docs/api/schemadefinitions/cbaseentity)>>

### ReapplyProvisionParity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAttributeManager.cs#L20)

```csharp
ref int ReapplyProvisionParity { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### OuterUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAttributeManager.cs#L31)

```csharp
void OuterUpdated()
```

### ProviderTypeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAttributeManager.cs#L32)

```csharp
void ProviderTypeUpdated()
```

### ReapplyProvisionParityUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAttributeManager.cs#L30)

```csharp
void ReapplyProvisionParityUpdated()
```

