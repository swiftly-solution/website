---
title: SummaryTakeDamageInfo_t
---

```csharp
public interface SummaryTakeDamageInfo_t : ISchemaClass<SummaryTakeDamageInfo_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Info

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SummaryTakeDamageInfo_t.cs#L19)

```csharp
ref CTakeDamageInfo Info { get; }
```

#### Property Value

- [CTakeDamageInfo](/docs/api/shared/natives/ctakedamageinfo)

### Result

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SummaryTakeDamageInfo_t.cs#L21)

```csharp
ref CTakeDamageResult Result { get; }
```

#### Property Value

- [CTakeDamageResult](/docs/api/shared/natives/ctakedamageresult)

### SummarisedCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SummaryTakeDamageInfo_t.cs#L17)

```csharp
ref int SummarisedCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Target

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SummaryTakeDamageInfo_t.cs#L23)

```csharp
ref CHandle<CBaseEntity> Target { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

