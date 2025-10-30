---
title: CCommand
---

```csharp
public struct CCommand
```

#### Inherited Members

## Constructors

### CCommand()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CCommand.cs#L21)

```csharp
public CCommand()
```

### CCommand(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CCommand.cs#L31)

```csharp
public CCommand(string commandString)
```

#### Parameters

- **commandString**: [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### ArgC

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CCommand.cs#L49)

```csharp
public readonly int ArgC { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ArgS

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CCommand.cs#L51)

```csharp
public readonly string? ArgS { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)?

### GetCommandString

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CCommand.cs#L53)

```csharp
public readonly string? GetCommandString { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)?

### this

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CCommand.cs#L57)

```csharp
public readonly string? this[int index] { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)?

## Methods

### Arg(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CCommand.cs#L55)

```csharp
public readonly string? Arg(int index)
```

#### Parameters

- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)?

### FindArg(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CCommand.cs#L59)

```csharp
public readonly int FindArg(string name)
```

#### Parameters

- **name**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FindArgInt(string, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CCommand.cs#L73)

```csharp
public readonly int FindArgInt(string name, int defaultVal)
```

#### Parameters

- **name**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **defaultVal**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MaxCommandLength()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CCommand.cs#L87)

```csharp
public static int MaxCommandLength()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Reset()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CCommand.cs#L42)

```csharp
public void Reset()
```

### Tokenize(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CCommand.cs#L89)

```csharp
public bool Tokenize(string commandString)
```

#### Parameters

- **commandString**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

