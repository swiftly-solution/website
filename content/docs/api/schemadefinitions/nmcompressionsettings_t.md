---
title: NmCompressionSettings_t
---

# Interface NmCompressionSettings_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/NmCompressionSettings_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface NmCompressionSettings_t : ISchemaClass<NmCompressionSettings_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<NmCompressionSettings_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ConstantRotation

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/NmCompressionSettings_t.cs#L26)

```csharp
ref Quaternion ConstantRotation { get; }
```

#### Property Value

- [Quaternion](/docs/api/natives/quaternion)

### IsRotationStatic

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/NmCompressionSettings_t.cs#L28)

```csharp
ref bool IsRotationStatic { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsScaleStatic

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/NmCompressionSettings_t.cs#L32)

```csharp
ref bool IsScaleStatic { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsTranslationStatic

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/NmCompressionSettings_t.cs#L30)

```csharp
ref bool IsTranslationStatic { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ScaleRange

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/NmCompressionSettings_t.cs#L24)

```csharp
NmCompressionSettings_t__QuantizationRange_t ScaleRange { get; }
```

#### Property Value

- [NmCompressionSettings_t__QuantizationRange_t](/docs/api/schemadefinitions/nmcompressionsettings_t__quantizationrange_t)

### TranslationRangeX

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/NmCompressionSettings_t.cs#L18)

```csharp
NmCompressionSettings_t__QuantizationRange_t TranslationRangeX { get; }
```

#### Property Value

- [NmCompressionSettings_t__QuantizationRange_t](/docs/api/schemadefinitions/nmcompressionsettings_t__quantizationrange_t)

### TranslationRangeY

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/NmCompressionSettings_t.cs#L20)

```csharp
NmCompressionSettings_t__QuantizationRange_t TranslationRangeY { get; }
```

#### Property Value

- [NmCompressionSettings_t__QuantizationRange_t](/docs/api/schemadefinitions/nmcompressionsettings_t__quantizationrange_t)

### TranslationRangeZ

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/NmCompressionSettings_t.cs#L22)

```csharp
NmCompressionSettings_t__QuantizationRange_t TranslationRangeZ { get; }
```

#### Property Value

- [NmCompressionSettings_t__QuantizationRange_t](/docs/api/schemadefinitions/nmcompressionsettings_t__quantizationrange_t)

