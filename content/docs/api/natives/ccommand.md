---
title: CCommand
---

# Struct CCommand

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CCommand.cs#L6)

**Namespace**: [SwiftlyS2.Shared.Natives](/docs/api/natives)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public struct CCommand
```

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### CCommand()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CCommand.cs#L21)

```csharp
public CCommand()
```

### CCommand(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CCommand.cs#L31)

```csharp
public CCommand(string commandString)
```

#### Parameters

- **commandString**: [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### ArgC

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CCommand.cs#L49)

```csharp
public readonly int ArgC { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ArgS

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CCommand.cs#L51)

```csharp
public readonly string? ArgS { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)?

### GetCommandString

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CCommand.cs#L53)

```csharp
public readonly string? GetCommandString { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)?

### this

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CCommand.cs#L57)

```csharp
public readonly string? this[int index] { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)?

## Methods

### Arg(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CCommand.cs#L55)

```csharp
public readonly string? Arg(int index)
```

#### Parameters

- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)?

### FindArg(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CCommand.cs#L59)

```csharp
public readonly int FindArg(string name)
```

#### Parameters

- **name**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FindArgInt(string, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CCommand.cs#L73)

```csharp
public readonly int FindArgInt(string name, int defaultVal)
```

#### Parameters

- **name**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **defaultVal**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MaxCommandLength()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CCommand.cs#L87)

```csharp
public static int MaxCommandLength()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Reset()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CCommand.cs#L42)

```csharp
public void Reset()
```

### Tokenize(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CCommand.cs#L89)

```csharp
public bool Tokenize(string commandString)
```

#### Parameters

- **commandString**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

