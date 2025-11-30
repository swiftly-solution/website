---
title: SummaryTakeDamageInfo_t
---

# Interface SummaryTakeDamageInfo_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SummaryTakeDamageInfo_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface SummaryTakeDamageInfo_t : ISchemaClass<SummaryTakeDamageInfo_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<SummaryTakeDamageInfo_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Info

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SummaryTakeDamageInfo_t.cs#L20)

```csharp
ref CTakeDamageInfo Info { get; }
```

#### Property Value

- [CTakeDamageInfo](/docs/api/natives/ctakedamageinfo)

### Result

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SummaryTakeDamageInfo_t.cs#L22)

```csharp
ref CTakeDamageResult Result { get; }
```

#### Property Value

- [CTakeDamageResult](/docs/api/natives/ctakedamageresult)

### SummarisedCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SummaryTakeDamageInfo_t.cs#L18)

```csharp
ref int SummarisedCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Target

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SummaryTakeDamageInfo_t.cs#L24)

```csharp
ref CHandle<CBaseEntity> Target { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBaseEntity](/docs/api/schemadefinitions/cbaseentity)>

