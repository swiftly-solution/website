---
title: CAttributeManager
---

```csharp
public interface CAttributeManager : ISchemaClass<CAttributeManager>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### CachedResults

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAttributeManager.cs#L27)

```csharp
ref CUtlVector CachedResults { get; }
```

#### Property Value

- [CUtlVector](/docs/api/)

### Outer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAttributeManager.cs#L20)

```csharp
ref CHandle<CBaseEntity> Outer { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### PreventLoopback

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAttributeManager.cs#L22)

```csharp
ref bool PreventLoopback { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ProviderType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAttributeManager.cs#L24)

```csharp
ref attributeprovidertypes_t ProviderType { get; }
```

#### Property Value

- [attributeprovidertypes_t](/docs/api/shared/schemadefinitions/attributeprovidertypes_t)

### Providers

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAttributeManager.cs#L16)

```csharp
ref CUtlVector<CHandle<CBaseEntity>> Providers { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>>

### ReapplyProvisionParity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAttributeManager.cs#L18)

```csharp
ref int ReapplyProvisionParity { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### OuterUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAttributeManager.cs#L30)

```csharp
void OuterUpdated()
```

### ProviderTypeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAttributeManager.cs#L31)

```csharp
void ProviderTypeUpdated()
```

### ReapplyProvisionParityUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAttributeManager.cs#L29)

```csharp
void ReapplyProvisionParityUpdated()
```

