---
title: CEconItemView
---

# Interface CEconItemView

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CEconItemView : IEconItemInterface, ISchemaClass<IEconItemInterface>, ISchemaClass<CEconItemView>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [IEconItemInterface](/docs/api/schemadefinitions/ieconiteminterface)
- [ISchemaClass<IEconItemInterface>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CEconItemView>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AccountID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L30)

```csharp
ref uint AccountID { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### AttributeList

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L36)

```csharp
CAttributeList AttributeList { get; }
```

#### Property Value

- [CAttributeList](/docs/api/schemadefinitions/cattributelist)

### CustomName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L40)

```csharp
string CustomName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### CustomNameOverride

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L42)

```csharp
string CustomNameOverride { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### EntityLevel

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L22)

```csharp
ref uint EntityLevel { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### EntityQuality

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L20)

```csharp
ref int EntityQuality { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Initialized

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L34)

```csharp
ref bool Initialized { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InventoryPosition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L32)

```csharp
ref uint InventoryPosition { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### ItemDefinitionIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L18)

```csharp
ref ushort ItemDefinitionIndex { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### ItemID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L24)

```csharp
ref ulong ItemID { get; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### ItemIDHigh

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L26)

```csharp
ref uint ItemIDHigh { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### ItemIDLow

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L28)

```csharp
ref uint ItemIDLow { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### NetworkedDynamicAttributes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L38)

```csharp
CAttributeList NetworkedDynamicAttributes { get; }
```

#### Property Value

- [CAttributeList](/docs/api/schemadefinitions/cattributelist)

## Methods

### AccountIDUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L49)

```csharp
void AccountIDUpdated()
```

### AttributeListUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L52)

```csharp
void AttributeListUpdated()
```

### CustomNameUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L54)

```csharp
void CustomNameUpdated()
```

### EntityLevelUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L46)

```csharp
void EntityLevelUpdated()
```

### EntityQualityUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L45)

```csharp
void EntityQualityUpdated()
```

### InitializedUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L51)

```csharp
void InitializedUpdated()
```

### InventoryPositionUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L50)

```csharp
void InventoryPositionUpdated()
```

### ItemDefinitionIndexUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L44)

```csharp
void ItemDefinitionIndexUpdated()
```

### ItemIDHighUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L47)

```csharp
void ItemIDHighUpdated()
```

### ItemIDLowUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L48)

```csharp
void ItemIDLowUpdated()
```

### NetworkedDynamicAttributesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEconItemView.cs#L53)

```csharp
void NetworkedDynamicAttributesUpdated()
```

